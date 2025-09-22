// Color Psychology Database
const colorPsychologyData = {
    emotions: [
        {
            id: 'calm',
            name: 'Calm & Peaceful',
            description: 'Colors that promote relaxation and tranquility',
            colors: ['#87CEEB', '#98FB98', '#F0F8FF', '#E6E6FA', '#B0E0E6'],
            psychology: 'These colors help reduce stress and create a serene atmosphere.'
        },
        {
            id: 'energetic',
            name: 'Energetic & Dynamic',
            description: 'Colors that boost energy and enthusiasm',
            colors: ['#FF6B6B', '#FFD93D', '#6BCF7F', '#4D96FF', '#FF8C42'],
            psychology: 'Bright, vibrant colors that stimulate activity and excitement.'
        },
        {
            id: 'professional',
            name: 'Professional & Trustworthy',
            description: 'Colors that convey reliability and competence',
            colors: ['#2C3E50', '#34495E', '#7F8C8D', '#BDC3C7', '#ECF0F1'],
            psychology: 'Neutral and dark tones that inspire confidence and professionalism.'
        },
        {
            id: 'creative',
            name: 'Creative & Artistic',
            description: 'Colors that spark imagination and innovation',
            colors: ['#9B59B6', '#E74C3C', '#F39C12', '#1ABC9C', '#3498DB'],
            psychology: 'Bold, contrasting colors that encourage creative thinking.'
        },
        {
            id: 'romantic',
            name: 'Romantic & Passionate',
            description: 'Colors that evoke love and intimacy',
            colors: ['#E91E63', '#C2185B', '#FF69B4', '#FFB6C1', '#F8BBD9'],
            psychology: 'Warm, passionate colors that create emotional connections.'
        },
        {
            id: 'nature',
            name: 'Natural & Organic',
            description: 'Colors inspired by the natural world',
            colors: ['#2ECC71', '#27AE60', '#16A085', '#8FBC8F', '#90EE90'],
            psychology: 'Earth tones that promote harmony and connection with nature.'
        },
        {
            id: 'luxury',
            name: 'Luxury & Elegance',
            description: 'Colors that convey sophistication and wealth',
            colors: ['#2C2C54', '#40407A', '#706FD3', '#F8B500', '#FFD700'],
            psychology: 'Rich, deep colors that suggest premium quality and exclusivity.'
        },
        {
            id: 'playful',
            name: 'Playful & Fun',
            description: 'Colors that bring joy and lightheartedness',
            colors: ['#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3', '#FF9F43'],
            psychology: 'Bright, cheerful colors that encourage play and happiness.'
        }
    ],

    colorMeanings: {
        // Red variations
        '#FF0000': {
            name: 'Pure Red',
            emotions: ['passion', 'energy', 'urgency', 'love', 'anger'],
            psychology: 'Stimulates appetite, increases heart rate, creates urgency. Use sparingly for maximum impact.',
            bestFor: ['Call-to-action buttons', 'Food industry', 'Emergency alerts', 'Romantic themes'],
            avoidFor: ['Backgrounds', 'Text', 'Calming environments']
        },
        '#E74C3C': {
            name: 'Alizarin Red',
            emotions: ['passion', 'determination', 'strength'],
            psychology: 'A sophisticated red that conveys confidence without being overwhelming.',
            bestFor: ['Branding', 'Accent colors', 'Professional presentations'],
            avoidFor: ['Large areas', 'Medical contexts']
        },
        '#FF6B6B': {
            name: 'Coral Red',
            emotions: ['warmth', 'friendliness', 'approachability'],
            psychology: 'A softer red that maintains energy while being more welcoming.',
            bestFor: ['Social media', 'Friendly brands', 'Children\'s products'],
            avoidFor: ['Formal business', 'Serious topics']
        },

        // Blue variations
        '#3498DB': {
            name: 'Peter River Blue',
            emotions: ['trust', 'stability', 'calm', 'professionalism'],
            psychology: 'The most trusted color, promotes feelings of security and reliability.',
            bestFor: ['Corporate branding', 'Healthcare', 'Technology', 'Financial services'],
            avoidFor: ['Food industry', 'Urgent actions']
        },
        '#2980B9': {
            name: 'Belize Hole Blue',
            emotions: ['authority', 'confidence', 'intelligence'],
            psychology: 'A deeper blue that commands respect and suggests expertise.',
            bestFor: ['Professional services', 'Educational content', 'Government'],
            avoidFor: ['Playful contexts', 'Children\'s products']
        },
        '#87CEEB': {
            name: 'Sky Blue',
            emotions: ['peace', 'tranquility', 'openness', 'freedom'],
            psychology: 'Light and airy, promotes relaxation and clear thinking.',
            bestFor: ['Healthcare', 'Wellness', 'Travel', 'Spiritual content'],
            avoidFor: ['Urgent communications', 'High-energy brands']
        },

        // Green variations
        '#2ECC71': {
            name: 'Emerald Green',
            emotions: ['growth', 'harmony', 'balance', 'nature'],
            psychology: 'Associated with nature and growth, promotes feelings of balance and renewal.',
            bestFor: ['Environmental brands', 'Health products', 'Finance', 'Education'],
            avoidFor: ['Food (can suggest unripeness)', 'Urgent contexts']
        },
        '#27AE60': {
            name: 'Nephritis Green',
            emotions: ['stability', 'prosperity', 'freshness'],
            psychology: 'A deeper green that suggests growth and financial success.',
            bestFor: ['Banking', 'Investment', 'Organic products', 'Sustainability'],
            avoidFor: ['Medical (can suggest illness)', 'Warning contexts']
        },
        '#98FB98': {
            name: 'Pale Green',
            emotions: ['calm', 'healing', 'renewal', 'peace'],
            psychology: 'Very gentle green that promotes healing and tranquility.',
            bestFor: ['Healthcare', 'Wellness', 'Meditation', 'Natural products'],
            avoidFor: ['High-energy contexts', 'Urgent communications']
        },

        // Yellow variations
        '#F1C40F': {
            name: 'Sun Flower Yellow',
            emotions: ['happiness', 'optimism', 'creativity', 'energy'],
            psychology: 'Stimulates mental activity and creativity, but can cause eye strain.',
            bestFor: ['Children\'s products', 'Creative industries', 'Attention-grabbing elements'],
            avoidFor: ['Large backgrounds', 'Professional contexts', 'Text']
        },
        '#FFD93D': {
            name: 'Golden Yellow',
            emotions: ['warmth', 'joy', 'success', 'abundance'],
            psychology: 'Associated with gold and success, creates feelings of prosperity.',
            bestFor: ['Luxury brands', 'Success stories', 'Celebrations', 'Food'],
            avoidFor: ['Calming environments', 'Medical contexts']
        },

        // Purple variations
        '#9B59B6': {
            name: 'Amethyst Purple',
            emotions: ['creativity', 'mystery', 'luxury', 'spirituality'],
            psychology: 'Combines the stability of blue with the energy of red, promotes creativity.',
            bestFor: ['Creative industries', 'Luxury products', 'Beauty', 'Spiritual content'],
            avoidFor: ['Children\'s products', 'Food industry']
        },
        '#8E44AD': {
            name: 'Wisteria Purple',
            emotions: ['wisdom', 'dignity', 'independence', 'magic'],
            psychology: 'A deeper purple that suggests luxury and sophistication.',
            bestFor: ['High-end brands', 'Beauty products', 'Artistic content', 'Technology'],
            avoidFor: ['Children\'s contexts', 'Urgent communications']
        },

        // Orange variations
        '#E67E22': {
            name: 'Carrot Orange',
            emotions: ['enthusiasm', 'confidence', 'warmth', 'adventure'],
            psychology: 'Combines the energy of red with the happiness of yellow.',
            bestFor: ['Food industry', 'Entertainment', 'Sports', 'Adventure brands'],
            avoidFor: ['Professional services', 'Calming environments']
        },
        '#FF8C42': {
            name: 'Vibrant Orange',
            emotions: ['energy', 'excitement', 'fun', 'youthfulness'],
            psychology: 'High-energy color that stimulates appetite and activity.',
            bestFor: ['Children\'s products', 'Food', 'Entertainment', 'Sports'],
            avoidFor: ['Professional contexts', 'Healthcare', 'Luxury brands']
        },

        // Neutral variations
        '#2C3E50': {
            name: 'Midnight Blue',
            emotions: ['authority', 'elegance', 'sophistication', 'trust'],
            psychology: 'A very dark blue that conveys professionalism and reliability.',
            bestFor: ['Corporate branding', 'Professional services', 'Luxury products'],
            avoidFor: ['Children\'s products', 'Playful contexts']
        },
        '#34495E': {
            name: 'Wet Asphalt',
            emotions: ['stability', 'neutrality', 'professionalism'],
            psychology: 'A sophisticated dark gray that works well as a base color.',
            bestFor: ['Text', 'Backgrounds', 'Professional contexts'],
            avoidFor: ['Playful brands', 'Children\'s products']
        },
        '#7F8C8D': {
            name: 'Concrete Gray',
            emotions: ['neutrality', 'balance', 'sophistication'],
            psychology: 'A balanced gray that doesn\'t evoke strong emotions.',
            bestFor: ['Backgrounds', 'Text', 'Professional contexts'],
            avoidFor: ['Branding', 'Attention-grabbing elements']
        },
        '#ECF0F1': {
            name: 'Clouds White',
            emotions: ['purity', 'simplicity', 'clarity', 'peace'],
            psychology: 'Represents cleanliness and simplicity, provides excellent contrast.',
            bestFor: ['Backgrounds', 'Text', 'Minimalist design', 'Healthcare'],
            avoidFor: ['Branding (alone)', 'High-energy contexts']
        }
    },

    // Color harmony rules
    harmonies: {
        complementary: {
            name: 'Complementary',
            description: 'Colors opposite on the color wheel',
            psychology: 'Creates high contrast and visual tension, perfect for attention-grabbing designs.',
            useCases: ['Call-to-action buttons', 'Highlighting important elements', 'Dynamic designs']
        },
        analogous: {
            name: 'Analogous',
            description: 'Colors next to each other on the color wheel',
            psychology: 'Creates harmony and flow, perfect for calming and cohesive designs.',
            useCases: ['Backgrounds', 'Nature themes', 'Calming environments']
        },
        triadic: {
            name: 'Triadic',
            description: 'Three colors evenly spaced on the color wheel',
            psychology: 'Balances vibrancy with harmony, great for energetic yet balanced designs.',
            useCases: ['Branding', 'Children\'s products', 'Creative projects']
        },
        monochromatic: {
            name: 'Monochromatic',
            description: 'Different shades and tints of the same color',
            psychology: 'Creates sophisticated, elegant designs with subtle variations.',
            useCases: ['Professional contexts', 'Luxury brands', 'Minimalist design']
        }
    },

    // Industry-specific color recommendations
    industries: {
        healthcare: {
            colors: ['#87CEEB', '#98FB98', '#F0F8FF', '#B0E0E6', '#E6E6FA'],
            psychology: 'Calming, trustworthy colors that promote healing and reduce anxiety.',
            avoid: ['#FF0000', '#FF6B6B', '#E74C3C']
        },
        finance: {
            colors: ['#2C3E50', '#34495E', '#3498DB', '#2ECC71', '#F1C40F'],
            psychology: 'Professional, trustworthy colors that convey stability and growth.',
            avoid: ['#FF6B6B', '#E74C3C', '#FF8C42']
        },
        technology: {
            colors: ['#3498DB', '#2C3E50', '#9B59B6', '#1ABC9C', '#34495E'],
            psychology: 'Modern, innovative colors that suggest progress and reliability.',
            avoid: ['#FF6B6B', '#FF8C42', '#F1C40F']
        },
        food: {
            colors: ['#E67E22', '#FF8C42', '#F1C40F', '#E74C3C', '#2ECC71'],
            psychology: 'Appetite-stimulating colors that suggest freshness and warmth.',
            avoid: ['#9B59B6', '#8E44AD', '#34495E']
        },
        education: {
            colors: ['#3498DB', '#2ECC71', '#F1C40F', '#9B59B6', '#E67E22'],
            psychology: 'Engaging, trustworthy colors that promote learning and creativity.',
            avoid: ['#E74C3C', '#FF6B6B', '#2C3E50']
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = colorPsychologyData;
}

