#ifndef BONSAI_COMMANDS_H
#define BONSAI_COMMANDS_H
#include <unordered_map>

class BonsaiCommands
{
public:
    BonsaiCommands();
    std::unordered_map<std::string, void(BonsaiCommands::*)()> commands;
    void positive_command();
};

#endif