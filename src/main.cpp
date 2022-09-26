#include <dpp/dpp.h>
#include <boost/program_options.hpp>
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

    bot.on_slashcommand([](const dpp::slashcommand_t& event) {
        if (event.command.get_command_name() == "ping") {
            event.reply("Pong!");
        }
    });

    bot.on_ready([&bot](const dpp::ready_t& event) {
        if (dpp::run_once<struct register_bot_commands>()) {
            bot.global_command_create(
                    dpp::slashcommand("ping", "Ping pong!", bot.me.id)
            );
        }
    });

    bot.start(dpp::st_wait);
}
