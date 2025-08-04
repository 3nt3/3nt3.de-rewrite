---
title: Code Example
date: "2025-07-31"
tags: [programming, go]
---

## This is a code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Get the current time
    now := time.Now()

    // Format the time in RFC3339 format
    formattedTime := now.Format(time.RFC3339)

    // Print the formatted time
    fmt.Println("Current time in RFC3339 format:", formattedTime)
}
```

