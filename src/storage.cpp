#include "storage.h"
#include <iostream>
#include <string>

std::string Storage::create_record(std::string param)
{
    std::cout << param << std::endl;
    return "Record would be created here.";
};