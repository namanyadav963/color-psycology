// Color Psychology Palette Picker - Main JavaScript
class ColorPalettePicker {
    constructor() {
        this.currentPalette = [];
        this.paletteHistory = [];
        this.selectedEmotion = null;
        this.initializeApp();
    }

    initializeApp() {
        this.renderEmotionGrid();
        this.setupEventListeners();
        this.loadPaletteHistory();
    }

    // Render emotion selection grid
    renderEmotionGrid() {
        const emotionGrid = document.getElementById('emotionGrid');
        emotionGrid.innerHTML = '';

        colorPsychologyData.emotions.forEach(emotion => {
            const emotionCard = document.createElement('div');
            emotionCard.className = 'emotion-card';
            emotionCard.innerHTML = `
                <h3>${emotion.name}</h3>
                <p>${emotion.description}</p>
            `;
            
            emotionCard.addEventListener('click', () => {
                this.selectEmotion(emotion);
            });
            
            emotionGrid.appendChild(emotionCard);
        });
    }

    // Select emotion and generate palette
    selectEmotion(emotion) {
        // Remove previous selection
        document.querySelectorAll('.emotion-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked card
        event.currentTarget.classList.add('selected');
        
        this.selectedEmotion = emotion;
        this.generatePalette(emotion.colors);
        this.showEmotionPsychology(emotion);
    }

    // Generate color palette
    generatePalette(colors) {
        this.currentPalette = [...colors];
        this.showLoadingState();
        setTimeout(() => {
            this.renderPalette();
            this.addToHistory();
        }, 500);
    }

    // Show loading state
    showLoadingState() {
        const paletteContainer = document.getElementById('paletteContainer');
        paletteContainer.innerHTML = `
            <div class="palette-placeholder loading">
                <p>Generating your perfect palette...</p>
            </div>
        `;
    }

    // Render the current palette
    renderPalette() {
        const paletteContainer = document.getElementById('paletteContainer');
        
        if (this.currentPalette.length === 0) {
            paletteContainer.innerHTML = `
                <div class="palette-placeholder">
                    <p>Select an emotion above to generate your color palette</p>
                </div>
            `;
            return;
        }

        const paletteHTML = `
            <div class="color-palette">
                ${this.currentPalette.map(color => `
                    <div class="color-swatch" 
                         style="background-color: ${color}" 
                         data-color="${color}"
                         onclick="colorPicker.selectColor('${color}')">
                    </div>
                `).join('')}
            </div>
        `;

        paletteContainer.innerHTML = paletteHTML;
        paletteContainer.classList.add('fade-in');
    }

    // Show emotion psychology information
    showEmotionPsychology(emotion) {
        const analysisContent = document.getElementById('analysisContent');
        analysisContent.innerHTML = `
            <div class="color-analysis">
                <h3>${emotion.name} Psychology</h3>
                <p><strong>Description:</strong> ${emotion.description}</p>
                <p><strong>Psychological Effect:</strong> ${emotion.psychology}</p>
                <p><strong>Best Used For:</strong></p>
                <ul>
                    <li>Creating ${emotion.name.toLowerCase()} atmospheres</li>
                    <li>Designs that need to evoke these emotions</li>
                    <li>Branding that aligns with these feelings</li>
                </ul>
            </div>
        `;
        analysisContent.classList.add('fade-in');
    }

    // Generate random palette
    generateRandomPalette() {
        const allColors = Object.keys(colorPsychologyData.colorMeanings);
        const randomColors = [];
        
        for (let i = 0; i < 5; i++) {
            const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
            if (!randomColors.includes(randomColor)) {
                randomColors.push(randomColor);
            }
        }
        
        this.generatePalette(randomColors);
        this.showRandomPaletteAnalysis(randomColors);
    }

    // Show analysis for random palette
    showRandomPaletteAnalysis(colors) {
        const analysisContent = document.getElementById('analysisContent');
        const colorAnalyses = colors.map(color => {
            const colorData = colorPsychologyData.colorMeanings[color];
            return colorData ? `
                <div style="margin-bottom: 15px;">
                    <strong style="color: ${color};">${colorData.name}</strong>
                    <p>${colorData.psychology}</p>
                </div>
            ` : '';
        }).join('');

        analysisContent.innerHTML = `
            <div class="color-analysis">
                <h3>Random Palette Analysis</h3>
                ${colorAnalyses}
            </div>
        `;
        analysisContent.classList.add('fade-in');
    }

    // Select individual color for detailed analysis
    selectColor(color) {
        const colorData = colorPsychologyData.colorMeanings[color];
        if (!colorData) return;

        const analysisContent = document.getElementById('analysisContent');
        analysisContent.innerHTML = `
            <div class="color-analysis">
                <h3 style="color: ${color};">${colorData.name}</h3>
                <p><strong>Emotions:</strong> ${colorData.emotions.join(', ')}</p>
                <p><strong>Psychology:</strong> ${colorData.psychology}</p>
                <p><strong>Best For:</strong></p>
                <ul>
                    ${colorData.bestFor.map(use => `<li>${use}</li>`).join('')}
                </ul>
                <p><strong>Avoid For:</strong></p>
                <ul>
                    ${colorData.avoidFor.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>
        `;
        analysisContent.classList.add('fade-in');

        // Update color picker inputs
        this.updateColorInputs(color);
    }

    // Update color picker inputs
    updateColorInputs(hexColor) {
        const colorPicker = document.getElementById('colorPicker');
        const hexInput = document.getElementById('hexInput');
        const rgbInput = document.getElementById('rgbInput');
        const hslInput = document.getElementById('hslInput');

        colorPicker.value = hexColor;
        hexInput.value = hexColor;
        rgbInput.value = this.hexToRgb(hexColor);
        hslInput.value = this.hexToHsl(hexColor);
    }

    // Color conversion utilities
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 
            null;
    }

    hexToHsl(hex) {
        const rgb = this.hexToRgb(hex);
        if (!rgb) return null;
        
        const values = rgb.match(/\d+/g);
        const r = parseInt(values[0]) / 255;
        const g = parseInt(values[1]) / 255;
        const b = parseInt(values[2]) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Add palette to history
    addToHistory() {
        if (this.currentPalette.length === 0) return;

        const paletteEntry = {
            id: Date.now(),
            colors: [...this.currentPalette],
            emotion: this.selectedEmotion ? this.selectedEmotion.name : 'Random',
            timestamp: new Date().toLocaleString()
        };

        this.paletteHistory.unshift(paletteEntry);
        if (this.paletteHistory.length > 10) {
            this.paletteHistory = this.paletteHistory.slice(0, 10);
        }

        this.savePaletteHistory();
        this.renderPaletteHistory();
    }

    // Render palette history
    renderPaletteHistory() {
        const historyContainer = document.getElementById('historyContainer');
        
        if (this.paletteHistory.length === 0) {
            historyContainer.innerHTML = `
                <div class="history-placeholder">
                    <p>Your generated palettes will appear here</p>
                </div>
            `;
            return;
        }

        const historyHTML = this.paletteHistory.map(palette => `
            <div class="history-palette" onclick="colorPicker.loadPaletteFromHistory('${palette.id}')">
                <div class="mini-palette">
                    ${palette.colors.map(color => `
                        <div class="mini-swatch" style="background-color: ${color}"></div>
                    `).join('')}
                </div>
                <div class="palette-info">
                    <strong>${palette.emotion}</strong><br>
                    <small>${palette.timestamp}</small>
                </div>
            </div>
        `).join('');

        historyContainer.innerHTML = historyHTML;
    }

    // Load palette from history
    loadPaletteFromHistory(paletteId) {
        const palette = this.paletteHistory.find(p => p.id == paletteId);
        if (palette) {
            this.generatePalette(palette.colors);
        }
    }

    // Export palette functionality
    exportPalette() {
        if (this.currentPalette.length === 0) {
            alert('No palette to export! Generate a palette first.');
            return;
        }

        const exportOptions = {
            css: this.generateCSSExport(),
            json: this.generateJSONExport(),
            text: this.generateTextExport()
        };

        // Create export modal
        this.showExportModal(exportOptions);
    }

    generateCSSExport() {
        return this.currentPalette.map((color, index) => 
            `--color-${index + 1}: ${color};`
        ).join('\n');
    }

    generateJSONExport() {
        return JSON.stringify({
            palette: this.currentPalette,
            emotion: this.selectedEmotion ? this.selectedEmotion.name : 'Random',
            timestamp: new Date().toISOString(),
            psychology: this.selectedEmotion ? this.selectedEmotion.psychology : 'Mixed emotions'
        }, null, 2);
    }

    generateTextExport() {
        return `Color Psychology Palette
Generated: ${new Date().toLocaleString()}
Emotion: ${this.selectedEmotion ? this.selectedEmotion.name : 'Random'}

Colors:
${this.currentPalette.map((color, index) => 
    `${index + 1}. ${color}`
).join('\n')}

Psychology: ${this.selectedEmotion ? this.selectedEmotion.psychology : 'Mixed emotional responses'}`;
    }

    showExportModal(exportOptions) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%;">
                <h3>Export Palette</h3>
                <div style="margin: 20px 0;">
                    <button onclick="colorPicker.downloadExport('css')" style="margin: 5px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer;">CSS</button>
                    <button onclick="colorPicker.downloadExport('json')" style="margin: 5px; padding: 10px 20px; background: #2ECC71; color: white; border: none; border-radius: 5px; cursor: pointer;">JSON</button>
                    <button onclick="colorPicker.downloadExport('text')" style="margin: 5px; padding: 10px 20px; background: #9B59B6; color: white; border: none; border-radius: 5px; cursor: pointer;">Text</button>
                </div>
                <button onclick="this.closest('div').parentElement.remove()" style="padding: 10px 20px; background: #95a5a6; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
            </div>
        `;

        document.body.appendChild(modal);
        this.exportOptions = exportOptions;
    }

    downloadExport(format) {
        const content = this.exportOptions[format];
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `color-palette.${format}`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Setup event listeners
    setupEventListeners() {
        // Generate random palette button
        document.getElementById('generateRandom').addEventListener('click', (e) => {
            e.target.classList.add('bounce');
            setTimeout(() => e.target.classList.remove('bounce'), 600);
            this.generateRandomPalette();
        });

        // Export palette button
        document.getElementById('exportPalette').addEventListener('click', (e) => {
            e.target.classList.add('bounce');
            setTimeout(() => e.target.classList.remove('bounce'), 600);
            this.exportPalette();
        });

        // Color picker input
        document.getElementById('colorPicker').addEventListener('input', (e) => {
            this.updateColorInputs(e.target.value);
            this.selectColor(e.target.value);
        });

        // Hex input
        document.getElementById('hexInput').addEventListener('input', (e) => {
            const hex = e.target.value;
            if (/^#[0-9A-F]{6}$/i.test(hex)) {
                this.updateColorInputs(hex);
                this.selectColor(hex);
            }
        });

        // RGB input (read-only, but we can still show analysis)
        document.getElementById('rgbInput').addEventListener('click', () => {
            const rgb = document.getElementById('rgbInput').value;
            if (rgb) {
                // Convert RGB to hex for analysis
                const values = rgb.match(/\d+/g);
                if (values && values.length === 3) {
                    const hex = this.rgbToHex(parseInt(values[0]), parseInt(values[1]), parseInt(values[2]));
                    this.selectColor(hex);
                }
            }
        });
    }

    // Save/load palette history
    savePaletteHistory() {
        localStorage.setItem('colorPaletteHistory', JSON.stringify(this.paletteHistory));
    }

    loadPaletteHistory() {
        const saved = localStorage.getItem('colorPaletteHistory');
        if (saved) {
            this.paletteHistory = JSON.parse(saved);
            this.renderPaletteHistory();
        }
    }
}

// Initialize the application
let colorPicker;
document.addEventListener('DOMContentLoaded', () => {
    colorPicker = new ColorPalettePicker();
});

// Additional utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary success message
        const message = document.createElement('div');
        message.textContent = 'Copied to clipboard!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ECC71;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
        `;
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 2000);
    });
}

// Add copy functionality to color swatches
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-swatch')) {
        const color = e.target.getAttribute('data-color');
        copyToClipboard(color);
    }
});

