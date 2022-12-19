#include <dpp/dpp.h>
#include <boost/program_options.hpp>
#include "bonsai-commands.h"
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

    BonsaiCommands bonsaicmds;

    bot.on_slashcommand([&bonsaicmds](const dpp::slashcommand_t& event) {
        std::string requested_cmd = event.command.get_command_name();
        std::cout << requested_cmd << std::endl;
        if (bonsaicmds.commands.find(requested_cmd) == bonsaicmds.commands.end()) {
            event.reply("Command not found!");
        }
        else {
            // run cmd func here
        }
    });

    bot.on_ready([&bot](const dpp::ready_t& event) {
        if (dpp::run_once<struct register_bot_commands>()) {
            bot.global_command_create(
                    dpp::slashcommand("posit", "posit!", bot.me.id)
            );
        }
    });

    bot.start(dpp::st_wait);
}
