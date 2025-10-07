$(document).ready(function() {
    // Sticky Nav functionality
    const navbar = $('#sticky-navbar');
    const buttonGroup = $('#button-group-original');
    
    if (buttonGroup.length) {
      const stickyPoint = buttonGroup.offset().top + buttonGroup.outerHeight();
      $(window).scroll(function() {
        if ($(window).scrollTop() > stickyPoint) {
          navbar.addClass('visible');
        } else {
          navbar.removeClass('visible');
        }
      });
    }

    // Hamburger menu functionality
    $('#hamburger-menu').on('click', function() {
      $('#nav-links').toggleClass('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const projectData = {
    "final_answer": {
        "GPT-5": [0.11475409836065574, 0.24369747899159663],
        "Grok 4 Fast": [0.34972677595628415, 0.368],
        "gemini-2.5-pro": [0.16393442622950818, 0.37398373983739835],
        "Grok 4": [0.4076923076923077, 0.37681159420289856],
        "o4-mini": [0.273224043715847, 0.3972602739726027],
        "GPT OSS 120B": [0.17486338797814208, 0.4017094017094017],
        "DeepSeek-R1-Qwen3-8B": [0.4972677595628415, 0.4897959183673469],
        "Qwen3-4B": [0.4175824175824176, 0.52],
        "DeepSeek-v3.1": [0.7542857142857143, 0.5714285714285714],
        "Qwen3-235B-A22B": [0.4098360655737705, 0.6351351351351351]
    },
    "solved": {
        "DeepSeek-R1-Qwen3-8B": [0.6012461059190031, 0.6167247386759582, 0.47058823529411764],
        "DeepSeek-v3.1": [0.6731391585760518, 0.7092511013215859, 0.573170731707317],
        "GPT OSS 120B": [0.42990654205607476, 0.43231441048034935, 0.42391304347826086],
        "GPT-5": [0.3894080996884735, 0.4766355140186916, 0.21495327102803738],
        "Grok 4": [0.445993031358885, 0.4557522123893805, 0.4098360655737705],
        "Grok 4 Fast": [0.428125, 0.4675925925925926, 0.34615384615384615],
        "Qwen3-235B-A22B": [0.7881619937694704, 0.8352059925093633, 0.5555555555555556],
        "Qwen3-4B": [0.6355140186915887, 0.6703296703296703, 0.4375],
        "gemini-2.5-pro": [0.4953271028037383, 0.5644444444444444, 0.3333333333333333],
        "o4-mini": [0.5763239875389408, 0.6254826254826255, 0.3709677419354839]
    },
    "main": {
        "DeepSeek-R1-Qwen3-8B": [0.5634920634920635, 0.32341269841269843],
        "DeepSeek-v3.1": [0.7024793388429752, 0.48412698412698413],
        "GPT OSS 120B": [0.3373015873015873, 0.4742063492063492],
        "GPT-5": [0.2896825396825397, 0.582271762208068],
        "Grok 4": [0.434052757793765, 0.46785714285714286],
        "Grok 4 Fast": [0.3996023856858847, 0.5158730158730159],
        "Qwen3-235B-A22B": [0.6507936507936508, 0.37648809523809523],
        "Qwen3-4B": [0.5555555555555556, 0.33399602385685884],
        "gemini-2.5-pro": [0.375, 0.481610337972167],
        "o4-mini": [0.4662698412698413, 0.4384920634920635]
    },
    "self_sycophancy": {
        "GPT OSS 120B": [0.3412698412698413, 0.3373015873015873],
        "o4-mini": [0.5158730158730159, 0.4662698412698413],
        "Qwen3-235B-A22B": [0.6845238095238095, 0.6507936507936508],
        "Qwen3-4B": [0.7123015873015873, 0.5555555555555556],
        "DeepSeek-v3.1": [0.731006160164271, 0.7024793388429752]
    },
    "prompt": {
        "GPT OSS 120B": [0.3373015873015873, 0.33134920634920634],
        "o4-mini": [0.4662698412698413, 0.3869047619047619],
        "Qwen3-4B": [0.5555555555555556, 0.4384920634920635],
        "Qwen3-235B-A22B": [0.6507936507936508, 0.5734126984126984],
        "DeepSeek-v3.1": [0.7024793388429752, 0.3613963039014374]
    },
    "agentic": {
        "Qwen3-4B": [0.556, 0.409, 0.502, 0.431],
        "Qwen3-235B-A22B": [0.651, 0.383, 0.565, 0.575]
    },
    "self_confidence": {
        "Qwen3-235B-A22B": [0.6507936507936508, 0.43452380952380953, 0.5873015873015873, 0.6984126984126984],
        "Qwen3-4B": [0.5555555555555556, 0.28174603174603174, 0.5972222222222222, 0.5476190476190477]
    },
    "comp_count": {
        "aime": 30, "allrussian": 16, "bmo": 4, "bmosl": 26, "brumo": 30, "bulgaria": 6, "canada": 5, "china": 5, "chinatst": 22, "cmimc": 40, "egmo": 6, "elmosl": 32, "german": 4, "greece": 4, "hmmt": 30, "imosl": 37, "india": 27, "iran": 9, "israel": 10, "izho": 6, "jbmo": 4, "korea": 6, "nordic": 3, "pan": 6, "philippines": 8, "polish": 6, "rmm": 6, "romania": 14, "serbia": 4, "smt": 53, "spain": 5, "thai": 10, "turkey": 9, "usamo": 6, "usatst": 9, "vietnam": 6
    },
    "finetune": {
        "Qwen3-4B": [0.5555555555555556, 0.33399602385685884], "Qwen3-4B-FT": [0.509921, 0.37896825396825396] 
    }
    };

    const modelNameMapping = {
        "GPT-5": "GPT-5",
        "Grok 4 Fast": "Grok 4 Fast",
        "gemini-2.5-pro": "Gemini 2.5 Pro",
        "Grok 4": "Grok 4",
        "o4-mini": "o4-mini",
        "GPT OSS 120B": "GPT OSS 120B",
        "DeepSeek-R1-Qwen3-8B": "DeepSeek R1 8B",
        "Qwen3-4B": "Qwen3 4B",
        "DeepSeek-v3.1": "DeepSeek v3.1",
        "Qwen3-235B-A22B": "Qwen3 235B"
    };

    const competitionNameMapping = {
        "aime": "AIME", "allrussian": "All-Russian MO", "bmo": "Balkan MO",
        "bmosl": "Balkan MO Shortlist", "brumo": "BrUMO", "bulgaria": "Bulgarian MO",
        "canada": "Canadian MO", "china": "Chinese MO", "chinatst": "China TST",
        "cmimc": "CMIMC", "egmo": "European Girls' MO", "elmosl": "ELMO Shortlist",
        "german": "German MO", "greece": "Greek MO", "hmmt": "HMMT (Feb)",
        "imosl": "IMO Shortlist", "india": "Indian Preparation", "iran": "Iranian TST",
        "israel": "Israel TST", "izho": "International Zhautykov Olympiad",
        "jbmo": "Junior Balkan MO", "korea": "Korean MO", "nordic": "Nordic Mathematical Contest",
        "pan": "Pan African MO", "philippines": "Philippine MO", "polish": "Polish MO",
        "rmm": "Romanian Master of Mathematics", "romania": "Romanian MO",
        "serbia": "Serbian MO", "smt": "SMT", "spain": "Spanish MO",
        "thai": "Thailand MO", "turkey": "Turkish MO", "usamo": "USAMO",
        "usatst": "USA TST", "vietnam": "Vietnamese MO"
    };

    // --- Color Palette ---
    const colors = {
        blue: 'rgba(54, 162, 235, 0.7)',
        orange: 'rgba(255, 159, 64, 0.7)',
        green: 'rgba(75, 192, 192, 0.7)',
        red: 'rgba(255, 99, 132, 0.7)',
        purple: 'rgba(153, 102, 255, 0.7)',
        yellow: 'rgba(255, 206, 86, 0.7)',
    };
    const colorCycle = Object.values(colors);
    const pieChartColors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f', '#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#cccccc', '#48a9a6'];

    // --- Section 1: Main Results Table ---
    function createMainResultsTable() {
        const data = projectData.main;
        const container = document.getElementById('main-results-table-container');
        if (!container) return;

        const sortedData = Object.entries(data)
            .map(([key, values]) => ({
                modelKey: key,
                modelName: modelNameMapping[key] || key,
                sycophancy: values[0],
                utility: values[1]
            }))
            .sort((a, b) => a.sycophancy - b.sycophancy);

        let tableHTML = '<table><thead><tr><th>Model</th><th>Sycophancy (%)</th><th>Utility (%)</th></tr></thead><tbody>';
        sortedData.forEach(item => {
            tableHTML += `<tr>
                <td>${item.modelName}</td>
                <td>${(item.sycophancy * 100).toFixed(1)}</td>
                <td>${(item.utility * 100).toFixed(1)}</td>
            </tr>`;
        });
        tableHTML += '</tbody></table>';
        container.innerHTML = tableHTML;
    }

    // --- Section 2: Problem Distribution Pie Chart ---
    function createProblemDistributionChart() {
        const ctx = document.getElementById('problemDistributionChart');
        if (!ctx) return;
        
        const finalAnswerComps = ['brumo', 'smt', 'hmmt', 'aime', 'cmimc'];

        // Convert to array and sort by count in descending order
        const sortedComps = Object.entries(projectData.comp_count)
            .map(([key, count]) => ({ key, count }))
            .sort((a, b) => b.count - a.count);

        // Extract sorted data for the chart
        const labels = sortedComps.map(comp => comp.key);
        const data = sortedComps.map(comp => comp.count);
        const types = sortedComps.map(comp => finalAnswerComps.includes(comp.key) ? 'Final-Answer' : 'Proof-Based');

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels, // Use short keys for the legend
                datasets: [{
                    label: '# of Problems',
                    data: data,
                    backgroundColor: pieChartColors,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: 'Problems per Competition' },
                    tooltip: {
                        callbacks: {
                            // Use the full name from the mapper in the tooltip title
                            title: function(context) {
                                const key = context[0].label;
                                return competitionNameMapping[key] || key;
                            },
                            // Show the problem count and type in the main label
                            label: function(context) {
                                const value = context.raw || 0;
                                const type = types[context.dataIndex];
                                return `${value} problems (${type})`;
                            }
                        }
                    }
                }
            }
        });
    }

    // --- Section 3: Per-Type Breakdown Bar Chart ---
    function createPerTypeChart() {
        const ctx = document.getElementById('perTypeChart');
        if (!ctx) return;
        
        const data = projectData.final_answer;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);
        const finalAnswerData = Object.values(data).map(v => v[0]);
        const proofBasedData = Object.values(data).map(v => v[1]);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Final-Answer Sycophancy',
                        data: finalAnswerData,
                        backgroundColor: colors.blue,
                    },
                    {
                        label: 'Proof-Based Sycophancy',
                        data: proofBasedData,
                        backgroundColor: colors.orange,
                    }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Sycophancy by Competition Type' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    // --- Section 4: Difficulty Breakdown Bar Chart ---
    function createDifficultyChart() {
        const ctx = document.getElementById('difficultyChart');
        if (!ctx) return;

        const data = projectData.solved;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Unsolved Problems', data: Object.values(data).map(v => v[1]), backgroundColor: colors.orange },
                    { label: 'Solved Problems', data: Object.values(data).map(v => v[2]), backgroundColor: colors.green }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Sycophancy by Problem Outcome' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    // --- Section 5: Self-Sycophancy Bar Chart ---
    function createSelfSycophancyChart() {
        const ctx = document.getElementById('selfSycophancyChart');
        if (!ctx) return;

        const data = projectData.self_sycophancy;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Standard', data: Object.values(data).map(v => v[1]), backgroundColor: colors.blue },
                    { label: 'Self-Sycophancy', data: Object.values(data).map(v => v[0]), backgroundColor: colors.red }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Sycophancy vs. Self-Sycophancy' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    // --- Section 6: Agentic Bar Chart ---
    function createAgenticChart() {
        const ctx = document.getElementById('agenticChart');
        if (!ctx) return;

        const data = projectData.agentic;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Standard', data: Object.values(data).map(v => v[0]), backgroundColor: colors.blue },
                    { label: 'Pass@4', data: Object.values(data).map(v => v[1]), backgroundColor: colors.orange },
                    { label: 'Best-of-4', data: Object.values(data).map(v => v[2]), backgroundColor: colors.green },
                    { label: 'Iterative Agent', data: Object.values(data).map(v => v[3]), backgroundColor: colors.purple }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Sycophancy in Agentic Setups' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    // --- Section 7: Prompt Optimisation Bar Chart ---
    function createPromptOptimisationChart() {
        const ctx = document.getElementById('promptOptimisationChart');
        if (!ctx) return;

        const data = projectData.prompt;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Standard Prompt', data: Object.values(data).map(v => v[0]), backgroundColor: colors.blue },
                    { label: 'Optimized Prompt', data: Object.values(data).map(v => v[1]), backgroundColor: colors.green }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Impact of Prompt Optimisation on Sycophancy' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    // --- Section 8: Self-Confidence Bar Chart ---
    function createSelfConfidenceChart() {
        const ctx = document.getElementById('selfConfidenceChart');
        if (!ctx) return;

        const data = projectData.self_confidence;
        const labels = Object.keys(data).map(key => modelNameMapping[key] || key);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Standard', data: Object.values(data).map(v => v[0]), backgroundColor: colors.blue },
                    { label: 'Pass@16', data: Object.values(data).map(v => v[1]), backgroundColor: colors.orange },
                    { label: 'Low@16', data: Object.values(data).map(v => v[2]), backgroundColor: colors.yellow },
                    { label: 'High@16', data: Object.values(data).map(v => v[3]), backgroundColor: colors.red }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Sycophancy vs. Self-Confidence Metrics' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    function createFinetuningChart() {
        const ctx = document.getElementById('finetuningChart');
        if (!ctx) return;
        const data = projectData.finetune;
        const labels = ["Qwen3-4B (Base)", "BrokenMath-Qwen3-4B"];
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Sycophancy', data: [data['Qwen3-4B'][0], data['Qwen3-4B-FT'][0]], backgroundColor: colors.red },
                    { label: 'Utility', data: [data['Qwen3-4B'][1], data['Qwen3-4B-FT'][1]], backgroundColor: colors.green }
                ]
            },
            options: {
                plugins: { title: { display: true, text: 'Impact of Fine-tuning on Qwen3-4B' } },
                scales: { y: { beginAtZero: true, ticks: { callback: value => value * 100 + '%' } } }
            }
        });
    }

    function renderExampleTraces() {
        const container = document.getElementById('example-traces-container');
        if (!container || typeof exampleTraces === 'undefined' || exampleTraces.length === 0) return;

        const tabButtons = document.createElement('div');
        tabButtons.className = 'tabs';
        const tabContents = document.createElement('div');

        exampleTraces.forEach((trace, index) => {
            const button = document.createElement('button');
            button.className = 'tab-button';
            button.textContent = trace.title;
            button.dataset.target = trace.id;
            tabButtons.appendChild(button);

            const content = document.createElement('div');
            content.id = trace.id;
            content.className = 'tab-content';
            content.innerHTML = `
                <div class="trace-box original-problem"><h4>Original Problem</h4><p>${trace.originalProblem}</p></div>
                <div class="trace-box sycophantic-problem"><h4>Sycophantic Problem</h4><p>${trace.sycophanticProblem}</p></div>
                <div class="trace-box model-solution"><h4>Model Solution</h4><p>${trace.modelSolution}</p></div>
                <div class="trace-box judgement"><h4>LLM Judge Verdict</h4><p><span class="judgement-header">Classification:</span>${trace.llmJudgement}</p><hr><p><span class="judgement-header">Reasoning:</span>${trace.judgementTrace}</p></div>
            `;
            tabContents.appendChild(content);

            if (index === 0) {
                button.classList.add('active');
                content.classList.add('active');
            }
        });

        container.appendChild(tabButtons);
        container.appendChild(tabContents);

        tabButtons.addEventListener('click', (e) => {
            if (e.target.matches('.tab-button')) {
                container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                const targetId = e.target.dataset.target;
                e.target.classList.add('active');
                document.getElementById(targetId).classList.add('active');
            }
        });
        

        renderMathInElement(container, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    }

    // --- Initialize all visualizations ---
    createMainResultsTable();
    createProblemDistributionChart();
    createPerTypeChart();
    createDifficultyChart();
    createSelfSycophancyChart();
    createAgenticChart();
    createPromptOptimisationChart();
    createSelfConfidenceChart();
    createFinetuningChart();
    renderExampleTraces();
});