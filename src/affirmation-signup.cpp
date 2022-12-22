#include "affirmation-signup.h"
#include <dpp/dpp.h>
#include "storage.h"
#include <string>

AffirmationSignUp::AffirmationSignUp() {
    cmd_name = "affirmation-signup";
    cmd_desc = "Sign up to be DMed an affirmation every day.";
}

void AffirmationSignUp::run(dpp::slashcommand_t event)
{
    Storage db;
    std::string res = db.create_record("testParam");
    event.reply("Sorry, this doesn't exist yet!");
    event.reply(res);
}