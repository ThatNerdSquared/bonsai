#include <dpp/dpp.h>
#include <boost/program_options.hpp>
#include "positive.h"
#include "affirmation-signup.h"
#include <iostream>
#include <unordered_map>
namespace po = boost::program_options;

int main(int ac, char* av[]) {
    std::string BOT_TOKEN;

    po::options_description desc("Allowed options");
    desc.add_options()
            ("token", po::value<std::string>(&BOT_TOKEN)->required(), "Discord bot token")
            ;

    po::variables_map vm;
    po::store(po::parse_command_line(ac, av, desc), vm);
    po::notify(vm);

    dpp::cluster bot(BOT_TOKEN);

    bot.on_log(dpp::utility::cout_logger());

    std::unordered_map<std::string, BonsaiCommand*> bonsaicmds;
    Positive positive;
    std::cout << "desc1" << " " << positive.cmd_desc << std::endl;
    bonsaicmds["positive"] = &positive;
    std::cout << "desc2" << " " << bonsaicmds["positive"]->cmd_desc << std::endl;
    bonsaicmds["affirmation-signup"] = new AffirmationSignUp();

    bot.on_slashcommand([&bonsaicmds](const dpp::slashcommand_t& event) {
        std::string requested_cmd = event.command.get_command_name();
        if (bonsaicmds.find(requested_cmd) == bonsaicmds.end()) {
            event.reply("Command not found!");
        }
        else {
            bonsaicmds[requested_cmd]->run(event);
        }
    });

    // std::vector<dpp::slashcommand> cmds;
    // for (auto x : bonsaicmds) {
    //     cmds.push_back(dpp::slashcommand(x.first, x.second->cmd_desc, bot.me.id));
    // }
    bot.on_ready([&bot, &bonsaicmds](const dpp::ready_t& event) {
        if (dpp::run_once<struct register_bot_commands>()) {
            for (auto x : bonsaicmds) {
                std::cout << "key" << " " << x.first << std::endl;
                std::cout << "desc" << " " << x.second->cmd_desc << std::endl;
                bot.global_command_create(
                    dpp::slashcommand(x.first, x.second->cmd_desc, bot.me.id)
                );
            }
        }
    });

    bot.start(dpp::st_wait);
}
