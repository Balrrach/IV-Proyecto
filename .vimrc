let b:formatdef_format_my_file = '"clang-format -style=file"'
let b:formatters_typescript = ['format_my_file']
au BufWrite * :Autoformat
