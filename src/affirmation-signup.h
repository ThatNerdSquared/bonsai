#ifndef AFFIRMATION_SIGNUP_H
#define AFFIRMATION_SIGNUP_H
#include<string>
#include <dpp/dpp.h>
#include "bonsai-command.h"

class AffirmationSignUp: public BonsaiCommand
{
public:
    AffirmationSignUp();
    std::string cmd_name;
    std::string cmd_desc;
    void run(dpp::slashcommand_t event);
};

#endif