#ifndef POSITIVE_CMD_H
#define POSITIVE_CMD_H
#include<string>
#include <dpp/dpp.h>
#include "bonsai-command.h"

class Positive : public BonsaiCommand
{
public:
    Positive();
    std::string cmd_name;
    std::string cmd_desc;
    std::vector<std::string> affirmations;
    void run(dpp::slashcommand_t event);
};

#endif