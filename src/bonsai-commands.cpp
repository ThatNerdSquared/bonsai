#include <iostream>
#include "bonsai-commands.h"

BonsaiCommands::BonsaiCommands()
{
    commands["positive"] = &BonsaiCommands::positive_command;
};

void BonsaiCommands::positive_command()
{
    std::cout << "positive command triggered!" << std::endl;
};
