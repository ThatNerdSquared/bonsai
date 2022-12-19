#ifndef BONSAI_COMMAND_H
#define BONSAI_COMMAND_H
#include <string>
#include <dpp/dpp.h>

class BonsaiCommand
{
public:
    std::string cmd_name;
    std::string cmd_desc;
    virtual void run(dpp::slashcommand_t event)=0;
};

#endif