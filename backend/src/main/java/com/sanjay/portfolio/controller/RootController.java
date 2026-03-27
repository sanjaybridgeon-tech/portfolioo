package com.sanjay.portfolio.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class RootController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<String> home() {
        return ResponseEntity.ok()
            .body("<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <title>Portfolio API Docs</title>\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "    <style>\n" +
                "        :root { --bg: #09090b; --glass: rgba(255, 255, 255, 0.05); --border: rgba(255, 255, 255, 0.1); --primary: #3b82f6; --text: #e2e8f0; }\n" +
                "        body { background: var(--bg); color: var(--text); font-family: -apple-system, system-ui; margin: 0; display: flex; justify-content: center; min-height: 100vh; line-height: 1.6; }\n" +
                "        .container { max-width: 800px; width: 90%; padding: 4rem 1rem; }\n" +
                "        .glass { background: var(--glass); backdrop-filter: blur(10px); border: 1px solid var(--border); border-radius: 1rem; padding: 2rem; }\n" +
                "        .header { text-align: center; margin-bottom: 3rem; }\n" +
                "        h1 { font-size: 2.5rem; margin: 0; background: linear-gradient(45deg, #60a5fa, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }\n" +
                "        .section { margin-bottom: 2rem; }\n" +
                "        h2 { border-left: 4px solid var(--primary); padding-left: 1rem; margin-bottom: 1.5rem; font-size: 1.25rem; }\n" +
                "        .endpoint { background: rgba(0,0,0,0.3); border: 1px solid var(--border); border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem; transition: 0.2s; }\n" +
                "        .endpoint:hover { transform: translateY(-2px); border-color: var(--primary); }\n" +
                "        .method { font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 0.2rem; font-size: 0.8rem; margin-right: 0.5rem; }\n" +
                "        .get { background: #10b981; color: #000; }\n" +
                "        .post { background: #3b82f6; color: #fff; }\n" +
                "        .put { background: #f59e0b; color: #000; }\n" +
                "        .delete { background: #ef4444; color: #fff; }\n" +
                "        .path { font-family: monospace; color: #94a3b8; }\n" +
                "        .desc { font-size: 0.9rem; margin-top: 0.5rem; color: #64748b; }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"container\">\n" +
                "        <div class=\"header\">\n" +
                "            <h1>Portfolio API 🚀</h1>\n" +
                "            <p>Interactive backend system for dynamic content management</p>\n" +
                "        </div>\n" +
                "        \n" +
                "        <div class=\"glass\">\n" +
                "            <div class=\"section\">\n" +
                "                <h2>Public Endpoints</h2>\n" +
                "                <div class=\"endpoint\"><span class=\"method get\">GET</span> <span class=\"path\">/api/health</span><div class=\"desc\">System status check</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method get\">GET</span> <span class=\"path\">/api/personal-info</span><div class=\"desc\">Retrieve base profile details</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method get\">GET</span> <span class=\"path\">/api/skills</span><div class=\"desc\">List all technical & soft skills</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method get\">GET</span> <span class=\"path\">/api/projects</span><div class=\"desc\">View shared projects and repositories</div></div>\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"section\">\n" +
                "                <h2>Admin Operations (Protected)</h2>\n" +
                "                <div class=\"endpoint\"><span class=\"method post\">POST</span> <span class=\"path\">/api/auth/login</span><div class=\"desc\">Obtain secure JWT access token</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method put\">PUT</span> <span class=\"path\">/api/personal-info</span><div class=\"desc\">Update portfolio master details</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method post\">POST</span> <span class=\"path\">/api/skills</span><div class=\"desc\">Add new skill to database</div></div>\n" +
                "                <div class=\"endpoint\"><span class=\"method delete\">DELETE</span> <span class=\"path\">/api/skills/{id}</span><div class=\"desc\">Remove a skill node</div></div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        \n" +
                "        <footer style=\"text-align: center; margin-top: 3rem; color: #64748b; font-size: 0.8rem;\">\n" +
                "            Built with Spring Boot 🛸 Sanjay Portfolio Backend\n" +
                "        </footer>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>\n");
    }

    @GetMapping("/api/health")
    public Map<String, String> healthCheck() {
        return Map.of("status", "UP");
    }
}
