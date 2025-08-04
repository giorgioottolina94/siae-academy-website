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
                                    tags: ["Git", "Version Control", "Branching"],
                                    materials: [
                                        "📄 SIAE - Intro e Git.pdf",
                                        "🖼️ Git.png",
                                        "📖 1 - Version Control - Basi.ipynb",
                                        "📖 3 - Git in contesto Agile e Scrum.ipynb",
                                        "📄 git-cheat-sheet-education.pdf"
                                    ]
                                },
                                {
                                    title: "GitHub Actions",
                                    description: "Automazione CI/CD con GitHub Actions. Creazione di pipeline per l'integrazione continua e il deployment automatico.",
                                    tags: ["CI/CD", "Automation", "Pipeline"],
                                    materials: [
                                        "📖 4 - github_actions_codebase_demo.ipynb",
                                        "📖 4 - github_actions_codebase_demo_ml.ipynb",
                                        "🐍 train.py",
                                        "🔧 fix.sh",
                                        "📊 drug.csv",
                                        "🌐 drug_app.py"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Esercizi Git Pratici",
                                    description: "Serie completa di esercizi hands-on su Git: branching, committing, merging, stashing e gestione degli errori.",
                                    materials: [
                                        "📄 01 - Branching.docx + 📖 1 - branching.ipynb",
                                        "📄 02 - Commit.docx + 📖 2 - committing.ipynb",
                                        "📄 03 - Git Diff.docx + 📖 3 - git diff.ipynb",
                                        "📄 04 - Github Basics.docx + 📖 4 - github basics.ipynb",
                                        "📄 05 - Merging in Git.docx + 📖 5 - merging.ipynb",
                                        "📄 06 - Stashing.docx + 📖 6 - stashing.ipynb",
                                        "📄 07 - Undo Changes.docx + 📖 7 - undoing changes.ipynb"
                                    ]
                                },
                                {
                                    title: "Pipeline GitHub Actions",
                                    description: "Costruzione di una pipeline completa per l'estrazione e elaborazione di dati YouTube con GitHub Actions.",
                                    materials: [
                                        "📄 Esercizio 0 - Data Manipulation.pdf",
                                        "📄 Esercizio 1 - Github actions.pdf",
                                        "📖 6 - Github Actions - DE + Pipeline.ipynb",
                                        "🐍 data_pipeline.py",
                                        "🐍 functions.py"
                                    ]
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
                                    tags: ["NumPy", "Pandas", "Data Analysis"],
                                    materials: [
                                        "📄 SIAE - Python_EDA.pdf",
                                        "📖 numpy (1).ipynb",
                                        "📖 pandas (1).ipynb"
                                    ]
                                },
                                {
                                    title: "Exploratory Data Analysis (EDA)",
                                    description: "Tecniche avanzate di EDA su dataset reali (Amazon, Airbnb Roma, fatture). Visualizzazione dati e identificazione di pattern.",
                                    tags: ["EDA", "Visualization", "Statistics"],
                                    materials: [
                                        "📄 Dispensa su EDA_Base.pdf",
                                        "📄 Dispensa su EDA_Advanced.pdf",
                                        "📖 2 - amazon_sales_eda.ipynb",
                                        "📖 3 - EDA_AIRBNB_Rome.ipynb",
                                        "📖 4 - invoices_data_eda_ml.ipynb",
                                        "📊 amazon.csv",
                                        "📊 newest_invoices_data.csv"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti EDA Completi",
                                    description: "Analisi approfondita di dataset cinematografici e predizione del churn. Include data cleaning, feature engineering e preprocessing per ML.",
                                    materials: [
                                        "📖 esercizio_01.ipynb + esercizio_01_soluzione.ipynb",
                                        "📊 happiness_survey_data.csv",
                                        "📖 esercizio_02.ipynb + esercizio_02_soluzione.ipynb",
                                        "📊 Alarm Survey Data.xlsx",
                                        "📖 project1.ipynb + project1_soluzioni.ipynb",
                                        "📖 project2.ipynb + project2_soluzioni.ipynb",
                                        "📖 feature_encoding_solution.ipynb",
                                        "📖 feature_scaling_solution.ipynb",
                                        "📖 outlier_treatment_solution.ipynb",
                                        "📊 UCI_Pediatric_Appendicitis.csv"
                                    ]
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
                                    tags: ["LLM", "Transformer", "Attention"],
                                    materials: [
                                        "📄 SIAE - LLM.pdf"
                                    ]
                                },
                                {
                                    title: "Gemma con Ollama",
                                    description: "Esecuzione locale di modelli Gemma. Tecniche avanzate di prompt engineering: concatenazione, Few-shot, Chain of Thought.",
                                    tags: ["Gemma", "Ollama", "Prompt Engineering"],
                                    materials: [
                                        "📖 1 - gemma_ollama.ipynb",
                                        "📖 2 - gemma_concatenazione_di_prompt.ipynb",
                                        "📖 3 - gemma_tecniche_prompting_avanzate.ipynb",
                                        "⚙️ kaggle.json"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Inferenza Multimodale",
                                    description: "Esercizi pratici con Gemma per l'elaborazione di testo, immagini e video. Implementazione di tecniche di prompt avanzate.",
                                    materials: [
                                        "📄 Esercizi su Gemma.pdf",
                                        "📖 5 - gemma_inferenza_solo_testo.ipynb",
                                        "📖 6 - gemma_inferenza_immagini.ipynb",
                                        "📖 7 - gemma_inferenza_video.ipynb",
                                        "🖼️ image1.jpg",
                                        "🎥 video1.mp4"
                                    ]
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
                                    tags: ["RAG", "Retrieval", "Generation"],
                                    materials: [
                                        "📄 Sistemi RAG_ Gestione di Fonti Errate, Contraddittorie e Mancanza di Risposta.pdf",
                                        "📄 SIAE - RAG.pdf",
                                        "📖 1 - rag_kick_off_teoria.ipynb"
                                    ]
                                },
                                {
                                    title: "Implementazione Pratica",
                                    description: "Costruzione step-by-step di un sistema RAG funzionante con indicizzazione, chunking e retrieval semantico.",
                                    materials: [
                                        "📖 2 - rag_kick_off_pratica.ipynb",
                                        "📁 documenti_per_rag/ (7 file: CSV, DOCX, HTML, TXT, PDF)"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Demo e Q&A",
                                    description: "Sessione interactiva con demo di progetti RAG e risoluzione di domande tecniche avanzate.",
                                    materials: [
                                        "🎥 RAG - Live Coding Part 2, Projects Demo and Q&A.mov"
                                    ]
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
                                    tags: ["Embeddings", "DistilBERT", "Semantic Search"],
                                    materials: [
                                        "📄 SIAE - Fondamenti Embeddings e Metriche.pdf",
                                        "📖 ricerca_semantica_con_DistilBERT.ipynb",
                                        "🌐 app.py",
                                        "📊 Marvel Datastore.xlsx"
                                    ]
                                },
                                {
                                    title: "Vector Databases",
                                    description: "Implementazione di vector store con FAISS, Chroma e InMemoryDocumentStore per il retrieval efficiente.",
                                    tags: ["FAISS", "Chroma", "Vector DB"],
                                    materials: [
                                        "📖 Esempi con FAISS, Chroma e InMemoryDocumentStore"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti di Classificazione",
                                    description: "Classificazione automatica di curricula e ricerca semantica avanzata utilizzando embedding testuali.",
                                    materials: [
                                        "📄 Esercizi su Embeddings.pdf",
                                        "📖 0_genera_curricula.ipynb",
                                        "📖 1_classificazione_del_testo.ipynb",
                                        "📖 2_ricerca_semantica.ipynb",
                                        "📊 resumes.csv",
                                        "🐍 sk (1).py"
                                    ]
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
                                    tags: ["Retrieval", "Similarity Search", "Re-ranking"],
                                    materials: [
                                        "📄 SIAE - Retrieval.pdf",
                                        "📖 1 - retrieval_teoria.ipynb"
                                    ]
                                },
                                {
                                    title: "Pipeline RAG Completa",
                                    description: "Implementazione end-to-end di un sistema RAG con Haystack, dalla indicizzazione alla generazione.",
                                    materials: [
                                        "📖 sistema_rag_langchain.ipynb",
                                        "📖 esempio_rag_llamaindex.ipynb"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG fino al Retrieval",
                                    description: "Costruzione pratica di una pipeline RAG completa fino alla fase di retrieval, con ottimizzazione delle performance.",
                                    materials: [
                                        "📄 Esercizi su Retrieval.pdf",
                                        "📖 4_rag_completa_fino_a_retrieval.ipynb"
                                    ]
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
                                    tags: ["OCR", "Layout Analysis", "Table Extraction"],
                                    materials: [
                                        "📖 Notebook OCR avanzato con layout analysis",
                                        "📁 Esempi di documenti per testing OCR",
                                        "🐍 Script per estrazione tabelle"
                                    ]
                                },
                                {
                                    title: "Document Intelligence",
                                    description: "Utilizzo della libreria 'unstructured' per il partizionamento intelligente di PDF e l'estrazione di contenuti strutturati.",
                                    materials: [
                                        "📖 Notebook con libreria 'unstructured'",
                                        "📄 Esempi PDF per document intelligence",
                                        "📁 Slides/ - Guide teoriche"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG Multimodale",
                                    description: "Implementazione di un sistema RAG multimodale con LangChain e 'unstructured' per l'elaborazione di documenti complessi.",
                                    materials: [
                                        "📄 Esercizi su Advanced OCR.pdf",
                                        "📁 Data/ - Dataset per testing multimodale",
                                        "📁 Soluzioni/ - Implementazioni RAG multimodale"
                                    ]
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
                                    tags: ["Conversational RAG", "Memory", "Chat History"],
                                    materials: [
                                        "📖 Notebook RAG conversazionale con Haystack",
                                        "📁 Esempi di chat history e memoria",
                                        "📁 Slides/ - Architetture conversazionali"
                                    ]
                                },
                                {
                                    title: "Gestione del Contesto",
                                    description: "Implementazione di sistemi di memoria a breve e lungo termine per conversazioni RAG naturali e coerenti.",
                                    materials: [
                                        "📖 Notebook gestione contesto e memoria",
                                        "💾 File di configurazione memoria persistente",
                                        "🐍 Script per context management"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "RAG con Memoria",
                                    description: "Costruzione di un sistema RAG conversazionale completo con LangChain, includendo gestione della memoria e continuità delle conversazioni.",
                                    materials: [
                                        "📄 Esercizi su Conversational RAG.pdf",
                                        "📁 Data/ - Dataset conversazionali",
                                        "📁 Soluzioni/ - RAG completo con memoria"
                                    ]
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
                                    tags: ["Agents", "ReAct", "Planning"],
                                    materials: [
                                        "📖 Notebook sui fondamenti degli agenti LLM",
                                        "📁 Slides/ - Presentazioni architetture agentiche",
                                        "🧠 Esempi di cicli ReAct e planning"
                                    ]
                                },
                                {
                                    title: "Framework Agentici",
                                    description: "Panoramica di LangChain, LangGraph, AutoGen e CrewAI per la costruzione di sistemi agentici complessi.",
                                    tags: ["LangChain", "LangGraph", "AutoGen", "CrewAI"],
                                    materials: [
                                        "📖 Notebook comparativo framework agentici",
                                        "🔗 Esempi LangChain e LangGraph",
                                        "🤖 Tutorial AutoGen e CrewAI"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti da Zero",
                                    description: "Costruzione di agenti completi utilizzando l'API OpenAI con tool calling e retrieval da knowledge base.",
                                    materials: [
                                        "📄 Esercitazione - API_LangChain.pdf",
                                        "📖 5 - agente_completo_from_scratch.ipynb"
                                    ]
                                },
                                {
                                    title: "ReAct con LangChain",
                                    description: "Implementazione di agenti ReAct con LangChain e strumenti personalizzati per task complessi.",
                                    materials: [
                                        "📖 6 - react_langchain.ipynb"
                                    ]
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
                                    tags: ["System Prompts", "Tool Descriptions", "ReAct Framework"],
                                    materials: [
                                        "📖 Notebook system prompts avanzati",
                                        "📁 Slides/ - Tecniche prompting per agenti",
                                        "🛠️ Template per tool descriptions"
                                    ]
                                },
                                {
                                    title: "Pattern Avanzati",
                                    description: "Tecniche avanzate di prompting per orchestrazione, routing e gestione di flussi complessi.",
                                    materials: [
                                        "📖 Notebook pattern prompting avanzati",
                                        "🔀 Esempi orchestrazione e routing",
                                        "⚡ Script per gestione flussi complessi"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti di Summarization",
                                    description: "Costruzione di agenti specializzati per la summarization con LangGraph e pattern di orchestrazione avanzati.",
                                    materials: [
                                        "📄 Esercitazione - Advanced Prompting.pdf",
                                        "📖 2 - agente_summarization (1).ipynb",
                                        "📖 3 - concatenazione_prompting_orchestratori.ipynb"
                                    ]
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
                                    tags: ["Multi-Agent", "Cooperation", "Coordination"],
                                    materials: [
                                        "📖 Notebook architetture multi-agente",
                                        "📁 Slides/ - Sistemi cooperativi e gerarchici",
                                        "🤝 Esempi comunicazione inter-agente"
                                    ]
                                },
                                {
                                    title: "CrewAI Framework",
                                    description: "Implementazione pratica di sistemi multi-agente con CrewAI per task complessi e distribuiti.",
                                    materials: [
                                        "📖 Notebook CrewAI tutorial completo",
                                        "🚀 Esempi task distribuiti",
                                        "⚙️ File configurazione team agenti"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Agenti Router",
                                    description: "Costruzione di agenti router con Code Interpreter per l'analisi automatica di dati CSV.",
                                    materials: [
                                        "📄 Esercizi - Multi Agente.pdf",
                                        "📖 5 - code_interpreter.ipynb"
                                    ]
                                },
                                {
                                    title: "Sistemi CrewAI",
                                    description: "Implementazione di sistemi multi-agente basici con CrewAI per task collaborativi.",
                                    materials: [
                                        "📖 6 - basic_multi_agent_crewai.ipynb"
                                    ]
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
                                    tags: ["Security", "Privacy", "GDPR", "Governance"],
                                    materials: [
                                        "📖 Notebook sicurezza e jailbreaks",
                                        "🛡️ Esempi prompt injection e mitigazioni",
                                        "📄 Guide GDPR per sistemi AI"
                                    ]
                                },
                                {
                                    title: "Framework di Valutazione",
                                    description: "Strumenti per la valutazione: LangKit, Prompt Guard, LLM as a Judge e DeepEval per testing sistematico.",
                                    materials: [
                                        "📖 Notebook framework valutazione LangKit",
                                        "🔍 Esempi Prompt Guard e DeepEval",
                                        "⚖️ Template LLM as a Judge"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "LLM as a Judge",
                                    description: "Implementazione di sistemi di valutazione automatica utilizzando LLM per generare disagreement e valutazioni qualitative.",
                                    materials: [
                                        "📖 4 - notebook_llm_judge.ipynb"
                                    ]
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
                                    tags: ["Streamlit", "Gradio", "Prototyping"],
                                    materials: [
                                        "📖 Notebook Streamlit e Gradio tutorial",
                                        "🎨 Esempi UI/UX per applicazioni AI",
                                        "⚡ Template prototipazione rapida"
                                    ]
                                },
                                {
                                    title: "Best Practices UI/UX",
                                    description: "Principi di design per applicazioni AI user-friendly e tecniche di prototipazione rapida.",
                                    materials: [
                                        "📄 Guide UI/UX per applicazioni AI",
                                        "🎯 Esempi best practices design",
                                        "📱 Template responsive per AI apps"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetto FAME",
                                    description: "Costruzione di FAME (Food AI Meal Engine), una web-app full-stack che trasforma linee guida nutrizionali in piani alimentari personalizzati usando Google Gemini, con architettura Python + FastAPI (backend) e React TypeScript (frontend).",
                                    materials: [
                                        "📄 Guida Esercizio.pdf - Istruzioni complete FAME",
                                        "📝 Prompt completo per Lovable Dev - FAME (Food AI Meal Engine) - GPT 4.5.gdoc",
                                        "🍕 Specifiche architettura full-stack",
                                        "⚙️ Template FastAPI + React TypeScript"
                                    ]
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
                                    tags: ["MCP", "Interoperability", "Standards"],
                                    materials: [
                                        "📖 Notebook MCP tutorial completo",
                                        "🔗 Esempi interoperabilità strumenti AI",
                                        "📄 Specifiche protocollo MCP"
                                    ]
                                },
                                {
                                    title: "RAG Agentico",
                                    description: "Integrazione di sistemi RAG con architetture agentiche per retrieval intelligente e adattivo.",
                                    materials: [
                                        "📖 Notebook RAG agentico avanzato",
                                        "🤖 Esempi retrieval intelligente",
                                        "⚡ Pipeline RAG + Agenti integrate"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Automazione Data Science con CrewAI",
                                    description: "Automazione completa di un workflow di machine learning utilizzando un team di agenti AI specializzati con NotebookCodeExecutor per l'esecuzione di codice.",
                                    materials: [
                                        "📖 Automating Data Science with CrewAI Agents.ipynb"
                                    ]
                                },
                                {
                                    title: "AI Tutor con MCP",
                                    description: "Costruzione di un'applicazione client-server completa: server Gradio con quattro strumenti di apprendimento (streaming) e client con OpenAI Agents SDK per interazioni naturali.",
                                    materials: [
                                        "📖 MCP_Server.ipynb",
                                        "📖 Build an AI Tutor Using MCP and OpenAI Agents SDK.ipynb"
                                    ]
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
                                    isHackathon: true,
                                    materials: [
                                        "📁 hackathon-agenti-cosmici/",
                                        "🐍 galactic_apis.py",
                                        "🐍 evaluate_json_missions.py",
                                        "🐍 validate_json_format.py",
                                        "📄 galaxy_state.json",
                                        "📊 tasks.csv",
                                        "📄 requirements.txt",
                                        "📄 example_mission_result.json",
                                        "📄 hackathon_results_example.json"
                                    ]
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
                                    isHackathon: true,
                                    materials: [
                                        "📁 hackapizza/",
                                        "📊 domande.csv",
                                        "🐍 evaluation.py",
                                        "📄 requirements.txt",
                                        "📁 Hackapizza Dataset/ (PDF, HTML, DOCX, CSV, JSON)"
                                    ]
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
                                    tags: ["API", "REST", "FastAPI"],
                                    materials: [
                                        "📄 SIAE - MLOps - API, Payloads and more.pdf"
                                    ]
                                },
                                {
                                    title: "FastAPI e Testing",
                                    description: "Implementazione di API performanti con FastAPI, documentazione automatica e testing con Postman.",
                                    materials: [
                                        "📖 llmops_fastapi_postman.ipynb"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Deployment OpenAI Assistant",
                                    description: "Costruzione e deployment di un'API OpenAI Assistant utilizzando FastAPI e Docker per applicazioni production-ready.",
                                    materials: [
                                        "📄 Esercitazione - FastAPI.docx",
                                        "📖 Esercitazione - Postman.ipynb",
                                        "📖 llmops_fastapi_postman.ipynb"
                                    ]
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
                                    tags: ["Testing", "MLOps", "Quality Assurance"],
                                    materials: [
                                        "📄 SIAE - Testing in MLOps.pdf",
                                        "📖 MLOps_Testing (1).ipynb",
                                        "📖 mlops_pytest.ipynb"
                                    ]
                                },
                                {
                                    title: "Monitoring e Debugging",
                                    description: "Implementazione di sistemi di monitoraggio con Grafana per pipeline ML e debugging sistematico.",
                                    materials: [
                                        "📖 Grafana.ipynb"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Testing Pipeline ML",
                                    description: "Progetti completi di testing per pipeline ML: classificazione Titanic e predizione churn con pytest, validazione dati e quality gates.",
                                    materials: [
                                        "📖 istruzioni_mlops_testing_exercise1.ipynb",
                                        "📄 istruzioni_mlops_testing_exercise2.docx",
                                        "📖 mlops_testing_exercise1.ipynb",
                                        "📖 mlops_testing_exercise2.ipynb"
                                    ]
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
                                    tags: ["Docker", "Containerization", "DevOps"],
                                    materials: [
                                        "📖 Notebook Docker per ML/GenAI",
                                        "🐳 Dockerfile ottimizzati esempi",
                                        "⚡ Best practices containerizzazione"
                                    ]
                                },
                                {
                                    title: "Orchestrazione",
                                    description: "Docker Compose per applicazioni multi-container e best practices per ambienti di sviluppo e produzione.",
                                    materials: [
                                        "📖 Tutorial Docker Compose avanzato",
                                        "🔧 Template multi-container apps",
                                        "🌐 Setup sviluppo e produzione"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Pipeline ML Dockerizzate",
                                    description: "Costruzione di pipeline ML completamente reproducibili utilizzando Docker per consistenza tra ambienti.",
                                    materials: [
                                        "📄 Esercizi su Dockerizzazione.ipynb",
                                        "🐳 Pipeline ML containerizzate complete",
                                        "📁 Soluzioni/ - Docker setup production-ready"
                                    ]
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
                                    tags: ["AWS", "SageMaker", "Lambda", "Cloud"],
                                    materials: [
                                        "📖 Notebook AWS ML ecosystem",
                                        "☁️ Tutorial SageMaker completo",
                                        "⚡ Esempi Lambda per ML"
                                    ]
                                },
                                {
                                    title: "Deployment Scalabile",
                                    description: "Strategie di deployment scalabile e gestione di modelli in produzione con AWS.",
                                    materials: [
                                        "📖 Notebook deployment scalabile AWS",
                                        "🚀 Architetture production-ready",
                                        "📊 Monitoring e auto-scaling setup"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "MLOps Pipeline Completa",
                                    description: "Implementazione di una pipeline MLOps end-to-end con SageMaker e Lambda, dal training al deployment automatizzato.",
                                    materials: [
                                        "📄 Esercizi su AWS e SageMaker.ipynb",
                                        "☁️ Pipeline MLOps end-to-end completa",
                                        "📁 Soluzioni/ - Deployment AWS production"
                                    ]
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
                                    tags: ["Statistics", "Z-score", "IQR"],
                                    materials: [
                                        "📄 Anomaly_Detection_Dispensa.pdf",
                                        "📄 Anomaly Detection: Parte 1.pdf",
                                        "📖 AD_Strutturati_Semistrutturati.ipynb"
                                    ]
                                },
                                {
                                    title: "Clustering e Isolation",
                                    description: "Algoritmi di clustering (K-Means, DBSCAN, LOF) e metodi di isolation (Isolation Forest, One-Class SVM).",
                                    tags: ["Clustering", "K-Means", "DBSCAN", "Isolation Forest"],
                                    materials: [
                                        "📖 Metodi di clustering implementati in AD_Strutturati_Semistrutturati.ipynb"
                                    ]
                                },
                                {
                                    title: "Text Anomaly Detection",
                                    description: "Rilevamento anomalie in dati testuali utilizzando TF-IDF e tecniche di embedding.",
                                    tags: ["Text Analysis", "TF-IDF", "NLP"],
                                    materials: [
                                        "📖 AD_Text.ipynb",
                                        "📖 AD_Text_ISOT.ipynb",
                                        "📖 AD_Documents_Images.ipynb"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti Pratici",
                                    description: "Anomaly detection su dati Spotify e analisi di testi Magic: The Gathering per identificare pattern anomali.",
                                    materials: [
                                        "📄 AD_Strutturati_Spotify.pdf",
                                        "📄 AD_Testuali_Magic.pdf",
                                        "📖 spotify_anomaly_detection.ipynb",
                                        "📖 AD_Text_Magic.ipynb"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Day 2: Anomaly Detection - Unstructured Data",
                    icon: "fas fa-images",
                    sessions: [
                        {
                            time: "Mattina",
                            title: "Teoria e Live Coding",
                            content: [
                                {
                                    title: "Dati Geospaziali",
                                    description: "Tecniche specializzate per anomaly detection su dati geospaziali e serie temporali.",
                                    tags: ["Geospatial", "Time Series", "ARIMA", "Prophet"],
                                    materials: [
                                        "📄 Anomaly_Detection.pdf",
                                        "📄 AD_Parte 2.pdf",
                                        "📖 AD_Geospatial.ipynb",
                                        "📖 AD_Geo_2.ipynb",
                                        "📖 AD_Geo_F1.ipynb"
                                    ]
                                },
                                {
                                    title: "Dati Finanziari",
                                    description: "Applicazioni specifiche per il rilevamento di anomalie in dati finanziari e transazioni.",
                                    materials: [
                                        "📖 AD_Dati_finanziari.ipynb",
                                        "📖 AD_Fin.ipynb"
                                    ]
                                },
                                {
                                    title: "Computer Vision",
                                    description: "Anomaly detection su immagini e dati non strutturati utilizzando deep learning.",
                                    tags: ["Computer Vision", "Deep Learning", "Image Analysis"],
                                    materials: [
                                        "📖 AD_Documents_Images.ipynb"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Progetti Avanzati",
                                    description: "Anomaly detection su immagini Pokemon e analisi geospaziale di dati F1 per pattern di comportamento anomali.",
                                    materials: [
                                        "📄 AD_DocImage_Pokemon.pdf",
                                        "📄 AD_Geospatial_F1.pdf",
                                        "📖 AD_DocImage_Pokemon.ipynb",
                                        "📖 F1_Geospatial.ipynb",
                                        "📄 RAG_Level_Hard.pdf"
                                    ]
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
                                    tags: ["Agile", "Scrum", "Kanban"],
                                    materials: [
                                        "📄 Metodologie Agile - Scrum e Kanban.pdf - Guida completa",
                                        "🎥 Agile, Scrum, Kanban - Parte 1.mov - Registrazione teoria",
                                        "🎥 Agile, Scrum, Kanban - Parte 2.mov - Casi pratici",
                                        "📊 Template Scrum: Product Backlog e Sprint Planning"
                                    ]
                                },
                                {
                                    title: "Capstone Project Launch",
                                    description: "Presentazione ufficiale del Capstone Project con obiettivi, timeline e modalità di lavoro collaborative.",
                                    materials: [
                                        "📋 Specifiche Capstone Project",
                                        "📅 Timeline e milestone progetti",
                                        "👥 Guide team formation e ruoli"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Team Formation",
                                    description: "Formazione dei team per il Capstone Project, definizione dei ruoli e applicazione delle metodologie Agile apprese.",
                                    materials: [
                                        "📝 Template definizione team e ruoli",
                                        "📊 Board Kanban per progetti",
                                        "🎯 Sprint Planning templates"
                                    ]
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
                                    tags: ["Preference Learning", "Human Feedback", "RLHF"],
                                    materials: [
                                        "📄 RLHF e Model Alignment.pdf - Teoria completa",
                                        "📊 Dataset preferenze esempi pratici",
                                        "📖 Notebook creazione preference datasets"
                                    ]
                                },
                                {
                                    title: "Reward Models",
                                    description: "Training di reward models per predire preferenze umane e implementazione di DPO (Direct Preference Optimization).",
                                    tags: ["Reward Models", "DPO", "Model Alignment"],
                                    materials: [
                                        "📖 2_train_reward_model_rlhf.ipynb - Training pratico",
                                        "🏆 Esempi reward models funzionanti",
                                        "⚖️ Metriche valutazione reward models"
                                    ]
                                },
                                {
                                    title: "RLHF Implementation",
                                    description: "Implementazione pratica di Reinforcement Learning from Human Feedback per l'allineamento di modelli.",
                                    materials: [
                                        "📖 Notebook RLHF implementazione completa",
                                        "🔄 Pipeline RLHF end-to-end",
                                        "📊 Esempi feedback umano e iterazioni"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "DPO e RLHF Pratico",
                                    description: "Implementazione hands-on di DPO from scratch e training di reward models utilizzando dataset di preferenze reali.",
                                    materials: [
                                        "📖 1 - dpo-from-scratch.ipynb - Implementazione DPO",
                                        "🎯 Dataset reali per training reward models",
                                        "⚡ Script ottimizzazione DPO"
                                    ]
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
                                    tags: ["Hallucination", "Model Safety", "Validation"],
                                    materials: [
                                        "📄 Hallucination & Toxicity Tests, Deepeval e LLM as a judge.pdf",
                                        "🎥 Hallucinations and Toxicity tests - Teoria.mov",
                                        "📖 Notebook rilevamento allucinazioni"
                                    ]
                                },
                                {
                                    title: "Toxicity Assessment",
                                    description: "Valutazione della tossicità e bias nei modelli AI utilizzando framework come DeepEval e LLM as a Judge.",
                                    tags: ["Toxicity", "Bias Detection", "Model Evaluation"],
                                    materials: [
                                        "🎥 Hallucinations and Toxicity tests - Live Coding.mov",
                                        "📖 llm_judge.ipynb - LLM as a Judge pratico",
                                        "🔍 Framework DeepEval per testing"
                                    ]
                                }
                            ]
                        },
                        {
                            time: "Pomeriggio",
                            title: "Esercitazioni",
                            content: [
                                {
                                    title: "Testing Avanzato",
                                    description: "Implementazione di test sistematici per allucinazioni e tossicità utilizzando DeepEval su modelli quantizzati.",
                                    materials: [
                                        "📁 deepeval_quantized_llm/ - Progetto completo",
                                        "📖 Notebook testing modelli quantizzati",
                                        "🧪 Suite test allucinazioni e tossicità",
                                        "📄 README e documentazione testing"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Day 4: Polish and Present POCs",
                    icon: "fas fa-chalkboard-teacher",
                    sessions: [
                        {
                            time: "Mattina & Pomeriggio",
                            title: "Finalizzazione e Presentazioni",
                            content: [
                                {
                                    title: "Perfezionamento POC",
                                    description: "Finalizzazione dei Proof of Concept sviluppati durante il Capstone Project con focus su usabilità e presentazione.",
                                    materials: [
                                        "🎨 Template presentazione POC",
                                        "📊 Checklist finalizzazione progetti",
                                        "💡 Guide user experience e usabilità"
                                    ]
                                },
                                {
                                    title: "Presentazioni Finali",
                                    description: "Presentazione dei progetti agli stakeholder seguendo le best practice per demo efficaci e comunicazione tecnica.",
                                    tags: ["Presentation Skills", "Demo", "Stakeholder Communication"],
                                    materials: [
                                        "📄 Presentare POC e Progetti agli Stakeholder - Guide e Best Practice.pdf",
                                        "🎯 Template slide presentazioni efficaci",
                                        "📱 Checklist demo live progetti",
                                        "👥 Guide comunicazione stakeholder"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}; 