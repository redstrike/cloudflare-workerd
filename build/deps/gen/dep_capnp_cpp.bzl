# WARNING: THIS FILE IS AUTOGENERATED BY update-deps.py DO NOT EDIT

load("@//:build/http.bzl", "http_archive")

URL = "https://github.com/capnproto/capnproto/tarball/9de607fcd2fb0a9bf9b3f7081dc54b0b23c800c6"
STRIP_PREFIX = "capnproto-capnproto-9de607f/c++"
SHA256 = "aca34ded4e5cbe19831729d829d9ef48d669ecba97154b59a40ecc579f50a071"
TYPE = "tgz"
COMMIT = "9de607fcd2fb0a9bf9b3f7081dc54b0b23c800c6"

def dep_capnp_cpp():
    http_archive(
        name = "capnp-cpp",
        url = URL,
        strip_prefix = STRIP_PREFIX,
        type = TYPE,
        sha256 = SHA256,
    )
