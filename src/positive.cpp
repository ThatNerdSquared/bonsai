#include "positive.h"
#include <dpp/dpp.h>
#include <iostream>

Positive::Positive() {
    cmd_name = "positive";
    cmd_desc = "A bit of encouragement :)";
}

void Positive::run(dpp::slashcommand_t event)
{
    event.reply("positive vibes!");
}