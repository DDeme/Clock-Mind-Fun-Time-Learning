# Research Findings: Add MCP Servers to Gemini Settings

## Relevant Files
- `package.json`: Contains the `@storybook/addon-mcp` dependency, which is the primary candidate for an additional MCP server.
- `.storybook/main.ts`: Configures the `@storybook/addon-mcp` addon, defining how it should expose its tools.
- `~/.gemini/settings.json`: Currently contains the global configuration for the `pencil` MCP server.
- `.gemini/settings.json`: (To be created) Will host project-specific MCP server configurations, such as the Storybook server and a project-specific reference to the `pencil` server.

## Architecture
- **Model Context Protocol (MCP)**: Gemini CLI utilizes MCP to integrate with external tools, enhancing its ability to understand and manipulate the codebase.
- **Storybook MCP Server**: By adding `http://localhost:6006/mcp` to Gemini's settings, the CLI can interact with the component library, understand prop types, and generate or verify stories.
- **Pencil MCP Server**: This server provides design-related tools. While currently configured globally, moving it to workspace-specific settings ensures that any user working on this project has consistent access to the same toolset.

## Complexity
- **Low Complexity**: The task involves creating a JSON configuration file and ensuring the correct URLs and commands are specified for the MCP servers. No source code changes are required.

## Open Questions
- **Additional Servers**: Does the user want other common MCP servers (e.g., `git`, `github`) configured as well?
- **Pencil Migration**: Should the `pencil` server be moved entirely to the project-specific settings, or should it remain global?
- **Storybook Port**: Is the project always using the default port `6006` for Storybook, or should this be configurable?
- **Trust Setting**: Should the servers be marked as `trusted` to avoid manual approval for every tool call?
