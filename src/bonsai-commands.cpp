#include <iostream>
#include "bonsai-commands.h"

BonsaiCommands::BonsaiCommands()
{
    commands["posit"] = &BonsaiCommands::positive_command;
};

void BonsaiCommands::positive_command()
{
    std::cout << "positive command triggered!" << std::endl;
};
