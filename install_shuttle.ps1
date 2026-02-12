$env:PATH = "$env:USERPROFILE\.cargo\bin;$env:PATH"
cargo install cargo-shuttle 2>&1
Write-Host "=== SHUTTLE INSTALL DONE ==="
