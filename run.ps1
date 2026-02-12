$env:PATH = "$env:USERPROFILE\.cargo\bin;$env:PATH"
Set-Location D:\claude_todo
cargo build 2>&1
cargo run 2>&1
