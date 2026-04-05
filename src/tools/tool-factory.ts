import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { GetTools } from "./get/index.js";
import { ListTools } from "./list/index.js";

// Read-only fork: Create, Update, and Delete tools have been removed
// to prevent agents from modifying accounting data.

export function ToolFactory(server: McpServer) {
  GetTools.map((tool) => tool()).forEach((tool) =>
    server.tool(tool.name, tool.description, tool.schema, tool.handler),
  );
  ListTools.map((tool) => tool()).forEach((tool) =>
    server.tool(tool.name, tool.description, tool.schema, tool.handler),
  );
}
