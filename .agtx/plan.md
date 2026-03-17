# Implementation Plan: Add MCP Servers to Gemini Settings

## Analysis
Based on the research phase, the goal is to configure project-specific MCP servers for Gemini CLI. The project uses `@storybook/addon-mcp`, which provides a dedicated MCP server for UI components. Additionally, the `pencil` design tool is available globally but would benefit from being included in the project's explicit configuration for consistency. The task requires creating a new `.gemini/settings.json` file to house these configurations.

## Plan
1.  **Create `.gemini` directory**: If it doesn't exist, create a `.gemini` directory in the project root. (It already exists, so this is a check).
2.  **Create `.gemini/settings.json`**: Create a new file named `settings.json` inside the `.gemini` directory.
3.  **Add MCP Server Configuration**: Populate `settings.json` with the following JSON content. This configuration adds both the `pencil` and `storybook` servers.
    ```json
    {
      "mcpServers": {
        "pencil": {
          "command": "/home/prope/.windsurf/extensions/highagency.pencildev-0.6.32-universal/out/mcp-server-linux-x64",
          "args": [
            "--app",
            "windsurf"
          ],
          "env": {},
          "trust": true
        },
        "storybook": {
          "url": "http://localhost:6006/mcp",
          "trust": true
        }
      }
    }
    ```
4.  **Validation**: After the file is created, run `gemini mcp list` to verify that both servers are recognized and connected (assuming Storybook is running).

## Risks
- **Storybook Not Running**: The `storybook` MCP server will only be available if the Storybook development server is running. If it's not, Gemini CLI will fail to connect.
- **Hardcoded Paths**: The path to the `pencil` server is hardcoded. If another developer uses a different path, this configuration will fail for them. A more robust solution would be to use an environment variable or a path relative to the user's home directory. However, for this task, we will proceed with the absolute path found in the global settings.
- **Port Conflicts**: The configuration assumes Storybook runs on the default port `6006`. If the project is configured to use a different port, the `url` will need to be updated.
