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
set(Boost_USE_STATIC_LIBS ON)
find_package(OpenSSL REQUIRED)
find_package(Boost 1.45.0 COMPONENTS program_options)
target_include_directories(${PROJECT_NAME} PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}/../libs/DPP/include
    # ${CMAKE_CURRENT_SOURCE_DIR}/../libs/program_options/include
    ${Boost_INCLUDE_DIR}
    ${OPENSSL_INCLUDE_DIR}
)
target_link_libraries(${PROJECT_NAME}
    dpp
    ${OPENSSL_CRYPTO_LIBRARY}
    ${OPENSSL_SSL_LIBRARY}
    ${Boost_LIBRARIES}
)
