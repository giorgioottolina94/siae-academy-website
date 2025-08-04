const curriculumData = {
    weeks: [
        {
            id: 1,
            title: "Week 1: Foundations & Intro GenAI",
            subtitle: "Fondamenti e Introduzione all'AI Generativa",
            days: [
                {
                    id: 1,
                    title: "Day 1: Welcome & Setup",
                    icon: "fas fa-rocket",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Git e Version Control",
                                    description: "Introduzione ai concetti fondamentali di Git, repository, commit, branch e merge. Slides e notebook pratici per comprendere il workflow di sviluppo collaborativo.",
                                    tags: ["Git", "Version Control", "Branching"]
                                },
                                {
                                    title: "GitHub Actions",
                                    description: "Automazione CI/CD con GitHub Actions. Creazione di pipeline per l'integrazione continua e il deployment automatico.",
                                    tags: ["CI/CD", "Automation", "Pipeline"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Esercizi Git Pratici",
                                    description: "Serie completa di esercizi hands-on su Git: branching, committing, merging, stashing e gestione degli errori."
                                },
                                {
                                    title: "Pipeline GitHub Actions",
                                    description: "Costruzione di una pipeline completa per l'estrazione e elaborazione di dati YouTube con GitHub Actions."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Python Toolkit & Data Exploration",
                    icon: "fas fa-chart-bar",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "NumPy e Pandas",
                                    description: "Fondamenti dell'analisi dati con NumPy per calcoli numerici e Pandas per manipolazione di dataset strutturati.",
                                    tags: ["NumPy", "Pandas", "Data Analysis"]
                                },
                                {
                                    title: "Exploratory Data Analysis (EDA)",
                                    description: "Tecniche avanzate di EDA su dataset reali (Amazon, Airbnb Roma, fatture). Visualizzazione dati e identificazione di pattern.",
                                    tags: ["EDA", "Visualization", "Statistics"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti EDA Completi",
                                    description: "Analisi approfondita di dataset cinematografici e predizione del churn. Include data cleaning, feature engineering e preprocessing per ML."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Intro LLM & Prompt Engineering",
                    icon: "fas fa-brain",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Fondamenti LLM",
                                    description: "Architettura Transformer, meccanismi di attenzione e principi di funzionamento dei Large Language Models.",
                                    tags: ["LLM", "Transformer", "Attention"]
                                },
                                {
                                    title: "Gemma con Ollama",
                                    description: "Esecuzione locale di modelli Gemma. Tecniche avanzate di prompt engineering: concatenazione, Few-shot, Chain of Thought.",
                                    tags: ["Gemma", "Ollama", "Prompt Engineering"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Inferenza Multimodale",
                                    description: "Esercizi pratici con Gemma per l'elaborazione di testo, immagini e video. Implementazione di tecniche di prompt avanzate."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: RAG Kick-off",
                    icon: "fas fa-search",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Architettura RAG",
                                    description: "Introduzione ai sistemi Retrieval-Augmented Generation. Componenti principali: Retriever, Generator e workflow completo.",
                                    tags: ["RAG", "Retrieval", "Generation"]
                                },
                                {
                                    title: "Implementazione Pratica",
                                    description: "Costruzione step-by-step di un sistema RAG funzionante con indicizzazione, chunking e retrieval semantico."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Demo e Q&A",
                                    description: "Sessione interattiva con demo di progetti RAG e risoluzione di domande tecniche avanzate."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Week 2: RAG Document Intelligence",
            subtitle: "Sistemi RAG Avanzati e Document Intelligence",
            days: [
                {
                    id: 1,
                    title: "Day 1: Embeddings and Vector DB",
                    icon: "fas fa-vector-square",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Text Embeddings",
                                    description: "Generazione di embedding testuali con DistilBERT. Tecniche di ricerca semantica e similarity matching.",
                                    tags: ["Embeddings", "DistilBERT", "Semantic Search"]
                                },
                                {
                                    title: "Vector Databases",
                                    description: "Implementazione di vector store con FAISS, Chroma e InMemoryDocumentStore per il retrieval efficiente.",
                                    tags: ["FAISS", "Chroma", "Vector DB"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti di Classificazione",
                                    description: "Classificazione automatica di curricula e ricerca semantica avanzata utilizzando embedding testuali."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Retrieval",
                    icon: "fas fa-download",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Strategie di Retrieval",
                                    description: "Tecniche avanzate di retrieval: similarity search, hybrid search, re-ranking e ottimizzazione delle query.",
                                    tags: ["Retrieval", "Similarity Search", "Re-ranking"]
                                },
                                {
                                    title: "Pipeline RAG Completa",
                                    description: "Implementazione end-to-end di un sistema RAG con Haystack, dalla indicizzazione alla generazione."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG fino al Retrieval",
                                    description: "Costruzione pratica di una pipeline RAG completa fino alla fase di retrieval, con ottimizzazione delle performance."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Advanced OCR for RAG",
                    icon: "fas fa-file-text",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "OCR Avanzato",
                                    description: "Superamento delle limitazioni dell'OCR tradizionale con analisi del layout, estrazione di tabelle e modelli multimodali.",
                                    tags: ["OCR", "Layout Analysis", "Table Extraction"]
                                },
                                {
                                    title: "Document Intelligence",
                                    description: "Utilizzo della libreria 'unstructured' per il partizionamento intelligente di PDF e l'estrazione di contenuti strutturati."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG Multimodale",
                                    description: "Implementazione di un sistema RAG multimodale con LangChain e 'unstructured' per l'elaborazione di documenti complessi."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: Conversation in RAG",
                    icon: "fas fa-comments",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "RAG Conversazionale",
                                    description: "Integrazione della memoria nei sistemi RAG usando componenti Haystack sperimentali per chat persistenti.",
                                    tags: ["Conversational RAG", "Memory", "Chat History"]
                                },
                                {
                                    title: "Gestione del Contesto",
                                    description: "Implementazione di sistemi di memoria a breve e lungo termine per conversazioni RAG naturali e coerenti."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG con Memoria",
                                    description: "Costruzione di un sistema RAG conversazionale completo con LangChain, includendo gestione della memoria e continuità delle conversazioni."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Week 3: GenAI Advanced - Agents and Tools",
            subtitle: "Sistemi Agentici Avanzati e Integrazione di Strumenti",
            days: [
                {
                    id: 1,
                    title: "Day 1: Agentic Systems",
                    icon: "fas fa-robot",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Fondamenti degli Agenti",
                                    description: "Architettura degli agenti LLM, ciclo Ragionamento-Azione, gestione di strumenti, memoria e pianificazione.",
                                    tags: ["Agents", "ReAct", "Planning"]
                                },
                                {
                                    title: "Framework Agentici",
                                    description: "Panoramica di LangChain, LangGraph, AutoGen e CrewAI per la costruzione di sistemi agentici complessi.",
                                    tags: ["LangChain", "LangGraph", "AutoGen", "CrewAI"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti da Zero",
                                    description: "Costruzione di agenti completi utilizzando l'API OpenAI con tool calling e retrieval da knowledge base."
                                },
                                {
                                    title: "ReAct con LangChain",
                                    description: "Implementazione di agenti ReAct con LangChain e strumenti personalizzati per task complessi."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Prompting for Agents",
                    icon: "fas fa-code",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "System Prompts per Agenti",
                                    description: "Progettazione di prompt di sistema efficaci, descrizioni di strumenti e implementazione del framework ReAct.",
                                    tags: ["System Prompts", "Tool Descriptions", "ReAct Framework"]
                                },
                                {
                                    title: "Pattern Avanzati",
                                    description: "Tecniche avanzate di prompting per orchestrazione, routing e gestione di flussi complessi."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti di Summarization",
                                    description: "Costruzione di agenti specializzati per la summarization con LangGraph e pattern di orchestrazione avanzati."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Multi-agent Systems",
                    icon: "fas fa-users",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Architetture Multi-Agente",
                                    description: "Sistemi cooperativi e gerarchici, comunicazione inter-agente, coordinamento e collaborazione.",
                                    tags: ["Multi-Agent", "Cooperation", "Coordination"]
                                },
                                {
                                    title: "CrewAI Framework",
                                    description: "Implementazione pratica di sistemi multi-agente con CrewAI per task complessi e distribuiti."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti Router",
                                    description: "Costruzione di agenti router con Code Interpreter per l'analisi automatica di dati CSV."
                                },
                                {
                                    title: "Sistemi CrewAI",
                                    description: "Implementazione di sistemi multi-agente basici con CrewAI per task collaborativi."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: Ethics and Governance",
                    icon: "fas fa-balance-scale",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Sicurezza in GenAI",
                                    description: "Jailbreaks, prompt injection, governance dei dati, privacy e compliance GDPR nei sistemi AI.",
                                    tags: ["Security", "Privacy", "GDPR", "Governance"]
                                },
                                {
                                    title: "Framework di Valutazione",
                                    description: "Strumenti per la valutazione: LangKit, Prompt Guard, LLM as a Judge e DeepEval per testing sistematico."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "LLM as a Judge",
                                    description: "Implementazione di sistemi di valutazione automatica utilizzando LLM per generare disagreement e valutazioni qualitative."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Week 4: GenAI Applications and Rapid Prototyping",
            subtitle: "Applicazioni GenAI e Prototipazione Rapida",
            days: [
                {
                    id: 1,
                    title: "Day 1: Prototyping Tools",
                    icon: "fas fa-tools",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Strumenti di Prototipazione",
                                    description: "Panoramica di Streamlit, Gradio e altri framework per la creazione rapida di interfacce per applicazioni AI.",
                                    tags: ["Streamlit", "Gradio", "Prototyping"]
                                },
                                {
                                    title: "Best Practices UI/UX",
                                    description: "Principi di design per applicazioni AI user-friendly e tecniche di prototipazione rapida."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetto FAME",
                                    description: "Costruzione di FAME (Food AI Meal Engine), una web-app full-stack che trasforma linee guida nutrizionali in piani alimentari personalizzati usando Google Gemini, con architettura Python + FastAPI (backend) e React TypeScript (frontend)."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: MCP & Agentic RAG",
                    icon: "fas fa-plug",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Model Context Protocol",
                                    description: "Introduzione all'MCP per l'interoperabilità di strumenti AI. Standardizzazione delle interfacce tra modelli e strumenti esterni.",
                                    tags: ["MCP", "Interoperability", "Standards"]
                                },
                                {
                                    title: "RAG Agentico",
                                    description: "Integrazione di sistemi RAG con architetture agentiche per retrieval intelligente e adattivo."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Automazione Data Science con CrewAI",
                                    description: "Automazione completa di un workflow di machine learning utilizzando un team di agenti AI specializzati con NotebookCodeExecutor per l'esecuzione di codice."
                                },
                                {
                                    title: "AI Tutor con MCP",
                                    description: "Costruzione di un'applicazione client-server completa: server Gradio con quattro strumenti di apprendimento (streaming) e client con OpenAI Agents SDK per interazioni naturali."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Agents Hackathon (Agenti Cosmici)",
                    icon: "fas fa-rocket",
                    isHackathon: true,
                    sessions: [
                        {
                            time: "Mattina & Pomeriggio",
                            title: "Hackathon",
                            content: [
                                {
                                    title: "Hackathon Agenti Cosmici",
                                    description: "Competizione intensiva per sviluppare sistemi agentici innovativi. I partecipanti costruiscono agenti AI complessi utilizzando i framework appresi durante la settimana.",
                                    isHackathon: true
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: RAG Hackathon (Hackapizza)",
                    icon: "fas fa-pizza-slice",
                    isHackathon: true,
                    sessions: [
                        {
                            time: "Mattina & Pomeriggio",
                            title: "Hackathon",
                            content: [
                                {
                                    title: "Hackathon RAG (Hackapizza)",
                                    description: "Competizione focalizzata sulla costruzione di sistemi RAG avanzati per applicazioni reali. I team sviluppano soluzioni innovative per il retrieval e la generazione di contenuti.",
                                    isHackathon: true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Week 5: MLOps for GenAI",
            subtitle: "MLOps e Deployment per Sistemi GenAI",
            days: [
                {
                    id: 1,
                    title: "Day 1: API, Payloads, FastAPI and Postman",
                    icon: "fas fa-server",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Architetture API",
                                    description: "Design di API RESTful per sistemi GenAI, gestione di payload complessi e best practices per l'integrazione.",
                                    tags: ["API", "REST", "FastAPI"]
                                },
                                {
                                    title: "FastAPI e Testing",
                                    description: "Implementazione di API performanti con FastAPI, documentazione automatica e testing con Postman."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Deployment OpenAI Assistant",
                                    description: "Costruzione e deployment di un'API OpenAI Assistant utilizzando FastAPI e Docker per applicazioni production-ready."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Testing",
                    icon: "fas fa-vial",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Testing in MLOps",
                                    description: "Strategie di testing multi-livello: unit test, test di integrazione, validazione dati e modelli, test end-to-end.",
                                    tags: ["Testing", "MLOps", "Quality Assurance"]
                                },
                                {
                                    title: "Monitoring e Debugging",
                                    description: "Implementazione di sistemi di monitoraggio con Grafana per pipeline ML e debugging sistematico."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Testing Pipeline ML",
                                    description: "Progetti completi di testing per pipeline ML: classificazione Titanic e predizione churn con pytest, validazione dati e quality gates."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Dockerizzazione",
                    icon: "fab fa-docker",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Containerizzazione",
                                    description: "Principi di containerizzazione con Docker, creazione di immagini ottimizzate per applicazioni ML e GenAI.",
                                    tags: ["Docker", "Containerization", "DevOps"]
                                },
                                {
                                    title: "Orchestrazione",
                                    description: "Docker Compose per applicazioni multi-container e best practices per ambienti di sviluppo e produzione."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Pipeline ML Dockerizzate",
                                    description: "Costruzione di pipeline ML completamente reproducibili utilizzando Docker per consistenza tra ambienti."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: AWS, SageMaker, Lambdas",
                    icon: "fab fa-aws",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "AWS per ML",
                                    description: "Ecosistema AWS per machine learning: SageMaker, Lambda, ECR, S3 e integrazione di servizi cloud.",
                                    tags: ["AWS", "SageMaker", "Lambda", "Cloud"]
                                },
                                {
                                    title: "Deployment Scalabile",
                                    description: "Strategie di deployment scalabile e gestione di modelli in produzione con AWS."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "MLOps Pipeline Completa",
                                    description: "Implementazione di una pipeline MLOps end-to-end con SageMaker e Lambda, dal training al deployment automatizzato."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Week 6: Anomaly Detection and Optimisation",
            subtitle: "Rilevamento Anomalie e Ottimizzazione",
            days: [
                {
                    id: 1,
                    title: "Day 1: Anomaly Detection - Structured & Text Data",
                    icon: "fas fa-exclamation-triangle",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Metodi Statistici",
                                    description: "Tecniche statistiche per anomaly detection: Z-score, IQR, Elliptic Envelope su dati strutturati.",
                                    tags: ["Statistics", "Z-score", "IQR"]
                                },
                                {
                                    title: "Clustering e Isolation",
                                    description: "Algoritmi di clustering (K-Means, DBSCAN, LOF) e metodi di isolation (Isolation Forest, One-Class SVM).",
                                    tags: ["Clustering", "K-Means", "DBSCAN", "Isolation Forest"]
                                },
                                {
                                    title: "Text Anomaly Detection",
                                    description: "Rilevamento anomalie in dati testuali utilizzando TF-IDF e tecniche di embedding.",
                                    tags: ["Text Analysis", "TF-IDF", "NLP"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti Pratici",
                                    description: "Anomaly detection su dati Spotify e analisi di testi Magic: The Gathering per identificare pattern anomali."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Anomaly Detection - Unstructured Data",
                    icon: "fas fa-image",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Dati Geospaziali",
                                    description: "Tecniche specializzate per anomaly detection su dati geospaziali e serie temporali.",
                                    tags: ["Geospatial", "Time Series", "ARIMA", "Prophet"]
                                },
                                {
                                    title: "Dati Finanziari",
                                    description: "Applicazioni specifiche per il rilevamento di anomalie in dati finanziari e transazioni."
                                },
                                {
                                    title: "Computer Vision",
                                    description: "Anomaly detection su immagini e dati non strutturati utilizzando deep learning.",
                                    tags: ["Computer Vision", "Deep Learning", "Image Analysis"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti Avanzati",
                                    description: "Anomaly detection su immagini Pokemon e analisi geospaziale di dati F1 per pattern di comportamento anomali."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3 & 4: Anomaly Detection Hackathon",
                    icon: "fas fa-trophy",
                    isHackathon: true,
                    sessions: [
                        {
                            time: "Mattina & Pomeriggio",
                            title: "Hackathon",
                            content: [
                                {
                                    title: "SIAE Anomaly Detection Hackathon",
                                    description: "Hackathon intensivo per sviluppare algoritmi di ML per rilevare anomalie nei dati musicali SIAE. Quattro track specializzate con valutazione automatica basata su F1-Score.",
                                    isHackathon: true,
                                    details: [
                                        "**Track 1: Live Events** - Rilevamento combinazioni sospette di dati eventi musicali",
                                        "**Track 2: Documents** - Identificazione documenti fraudolenti o modificati",
                                        "**Track 3: Music Tracks** - Anomalie in metadati e caratteristiche audio",
                                        "**Track 4: Copyright** - Evasione Content ID e sleeper infringement"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Week 7: Capstone Projects",
            subtitle: "Progetti Capstone e Metodologie Avanzate",
            days: [
                {
                    id: 1,
                    title: "Day 1: Scrum, Agile and Kanban",
                    icon: "fas fa-tasks",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria su Metodologie Agili",
                            content: [
                                {
                                    title: "Metodologie Agile",
                                    description: "Principi del manifesto Agile, framework Scrum e Kanban. Ruoli (Product Owner, Scrum Master), eventi (Sprint, Daily Stand-up) e artefatti (Product Backlog, Sprint Backlog).",
                                    tags: ["Agile", "Scrum", "Kanban"]
                                },
                                {
                                    title: "Capstone Project Launch",
                                    description: "Presentazione ufficiale del Capstone Project con obiettivi, timeline e modalità di lavoro collaborative."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Team Formation",
                                    description: "Formazione dei team per il Capstone Project, definizione dei ruoli e applicazione delle metodologie Agile apprese."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Preference Datasets & Reward Models",
                    icon: "fas fa-award",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria su Tecniche di Allineamento Avanzate",
                            content: [
                                {
                                    title: "Preference Datasets",
                                    description: "Creazione e utilizzo di dataset di preferenze per l'allineamento di LLM con feedback umano.",
                                    tags: ["Preference Learning", "Human Feedback", "RLHF"]
                                },
                                {
                                    title: "Reward Models",
                                    description: "Training di reward models per predire preferenze umane e implementazione di DPO (Direct Preference Optimization).",
                                    tags: ["Reward Models", "DPO", "Model Alignment"]
                                },
                                {
                                    title: "RLHF Implementation",
                                    description: "Implementazione pratica di Reinforcement Learning from Human Feedback per l'allineamento di modelli."
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "DPO e RLHF Pratico",
                                    description: "Implementazione hands-on di DPO from scratch e training di reward models utilizzando dataset di preferenze reali."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Day 3: Hallucination & Toxicity Tests",
                    icon: "fas fa-shield-alt",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Hallucination Detection",
                                    description: "Tecniche per rilevare e mitigare allucinazioni nei LLM utilizzando metriche specifiche e sistemi di validazione.",
                                    tags: ["Hallucination", "Model Safety", "Validation"]
                                },
                                {
                                    title: "Toxicity Assessment",
                                    description: "Valutazione della tossicità e bias nei modelli AI utilizzando framework come DeepEval e LLM as a Judge.",
                                    tags: ["Toxicity", "Bias Detection", "Model Evaluation"]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Testing Avanzato",
                                    description: "Implementazione di test sistematici per allucinazioni e tossicità utilizzando DeepEval su modelli quantizzati."
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: Polish and Present POCs",
                    icon: "fas fa-presentation",
                    sessions: [
                        {
                            time: "Mattina & Pomeriggio",
                            title: "Finalizzazione e Presentazioni",
                            content: [
                                {
                                    title: "Perfezionamento POC",
                                    description: "Finalizzazione dei Proof of Concept sviluppati durante il Capstone Project con focus su usabilità e presentazione."
                                },
                                {
                                    title: "Presentazioni Finali",
                                    description: "Presentazione dei progetti agli stakeholder seguendo le best practice per demo efficaci e comunicazione tecnica.",
                                    tags: ["Presentation Skills", "Demo", "Stakeholder Communication"]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}; 