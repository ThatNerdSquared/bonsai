project(bonsai LANGUAGES CXX)

file(GLOB INCLUDE_FILES
    *.h
)
file(GLOB SOURCE_FILES
    *.cpp
)

add_executable(${PROJECT_NAME}
    ${INCLUDE_FILES}
    ${SOURCE_FILES}
)

set_target_properties(${PROJECT_NAME} PROPERTIES
    C_STANDARD 11
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED ON
)
set(OPENSSL_ROOT_DIR "/opt/homebrew/opt/openssl")
find_package(OpenSSL REQUIRED)
target_include_directories(${PROJECT_NAME} PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}/../libs/DPP/include
#    ${CMAKE_CURRENT_SOURCE_DIR}/../libs/program_options/include
    ${OPENSSL_INCLUDE_DIR}
)
target_link_libraries(${PROJECT_NAME}
    dpp
#    program_options
#    openssl
    ${OPENSSL_CRYPTO_LIBRARY}
    ${OPENSSL_SSL_LIBRARY}
)
