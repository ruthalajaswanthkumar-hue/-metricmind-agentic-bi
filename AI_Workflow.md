# MetricMind BI – AI Workflow Documentation

## Project Overview

MetricMind BI is an AI-powered Business Intelligence system that allows users to ask business questions in natural language. Instead of writing SQL queries, users can chat with an AI assistant, which retrieves accurate business data using a Semantic Layer.

---

# 1. What is an LLM?

LLM (Large Language Model) is an artificial intelligence model trained on massive amounts of text data. It understands natural language, answers questions, generates text, writes code, summarizes information, and performs reasoning.

Examples of LLMs include:

- Llama 3
- GPT
- Gemini
- Claude

### Role in MetricMind

In MetricMind, Llama 3 understands the user's business question, identifies the user's intent, and helps generate an appropriate request for the Semantic Layer. It does not directly access the database.

Example:

User:
> Show revenue for Q3 2025.

LLM understands:

- Metric → Revenue
- Time → Q3 2025

The request is then passed to the AI Agent.

---

# 2. What is LangChain?

LangChain is a Python framework used to build applications powered by Large Language Models.

It connects the LLM with external resources such as:

- APIs
- Databases
- Files
- Memory
- Tools

LangChain allows AI applications to perform complex workflows rather than simply generating text.

### Features

- Prompt Templates
- Chains
- Agents
- Tools
- Memory
- Output Parsers

### Role in MetricMind

LangChain manages the complete AI workflow by:

- Receiving the user's question
- Sending it to Llama
- Calling the Semantic Layer API
- Processing the returned data
- Generating a final business response

---

# 3. What is Prompt Engineering?

Prompt Engineering is the process of designing clear and effective instructions that guide an LLM to generate accurate responses.

A good prompt improves:

- Accuracy
- Consistency
- Reliability

Example:

Instead of:

> Show revenue

Use:

> You are a Business Intelligence Assistant. Return only approved business metrics using the Semantic Layer.

Good prompts reduce hallucinations and improve business accuracy.

---

# 4. What is an AI Agent?

An AI Agent is an intelligent software system that combines an LLM with tools, reasoning, and decision-making capabilities to complete tasks.

Unlike a simple chatbot, an AI Agent can:

- Understand user intent
- Decide what information is needed
- Call APIs
- Retrieve data
- Perform multi-step reasoning
- Generate structured responses

### AI Agent in MetricMind

The AI Agent receives business questions and coordinates the entire workflow.

Example:

User asks:

> Why did European margins decrease last quarter?

The AI Agent:

1. Understands the request.
2. Calls the Semantic Layer API.
3. Retrieves margin data.
4. Requests additional cost information if needed.
5. Identifies the reason.
6. Generates a natural-language explanation.

---

# 5. AI Workflow for MetricMind

## Step-by-Step Workflow

1. User enters a business question in the chat interface.
2. LangChain sends the question to Llama 3.
3. Llama identifies the user's intent and required business metrics.
4. LangChain calls the Semantic Layer API (Cube.dev/dbt).
5. The Semantic Layer converts business metrics into optimized database queries.
6. Snowflake retrieves the required data.
7. Data is returned as JSON.
8. LangChain formats the response.
9. The user receives charts and explanations.

---

## Workflow Diagram

```
Business User
        │
        ▼
Next.js Chat Interface
        │
        ▼
LangChain AI Agent
        │
        ▼
Llama 3
        │
        ▼
Semantic Layer (Cube.dev / dbt)
        │
        ▼
Snowflake Data Warehouse
        │
        ▼
Business Data (JSON)
        │
        ▼
Charts + Natural Language Explanation
```

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| Python | Backend programming language |
| LangChain | AI orchestration framework |
| Llama 3 | Large Language Model |
| Ollama | Runs Llama locally |
| Cube.dev | Semantic Layer |
| dbt | Data transformation |
| Snowflake | Cloud Data Warehouse |
| Next.js | Frontend chat interface |

---

# Conclusion

MetricMind combines Artificial Intelligence and Business Intelligence to provide accurate, explainable, and trustworthy business insights. Instead of allowing the AI to write raw SQL, the system uses a Semantic Layer to ensure all business metrics follow standardized definitions. LangChain coordinates the workflow, Llama 3 understands user intent, and the AI Agent retrieves and presents reliable information from the enterprise data warehouse.