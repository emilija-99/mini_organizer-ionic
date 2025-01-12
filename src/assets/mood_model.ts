export interface Mood {
    emoji: string;
    feeling: string;
    color: string;
    toastMessage: string;
}

export const moods: Mood[] = [
    {
        emoji: '😁',
        feeling: 'happy',
        color: 'success',
        toastMessage: '“Very little is needed to make a happy life; it is all within yourself, in your way of thinking.” – Marcus Aurelius'
    },
    {
        emoji: '😐',
        feeling: 'neutral',
        color: 'warning',
        toastMessage: '“If you are distressed by anything external, the pain is not due to the thing itself but to your estimate of it; and this you have the power to revoke at any moment.” – Marcus Aurelius'
    },
    {
        emoji: '😞',
        feeling: 'sad',
        color: 'danger',
        toastMessage: '“Don’t lament this and don’t get agitated.” – Epictetus'
    },
    {
        emoji: '😡',
        feeling: 'angry/frustrated',
        color: 'danger',
        toastMessage: '“How much more grievous are the consequences of anger than the causes of it.” – Marcus Aurelius'
    },
    {
        emoji: '😴',
        feeling: 'sleepy/tired',
        color: 'success',
        toastMessage: '“If you seek tranquillity, do less.” – Marcus Aurelius'
    },
    {
        emoji: '😷',
        feeling: 'sick/ill',
        color: 'danger',
        toastMessage: '“Disease is an impediment to the body, but not to the will, unless the will itself chooses.” – Epictetus'
    },
    {
        emoji: '🤯',
        feeling: 'stressed/overwhelmed',
        color: 'danger',
        toastMessage: '“You have power over your mind - not outside events. Realize this, and you will find strength.” – Marcus Aurelius'
    },
    {
        emoji: '😨',
        feeling: 'anxious',
        color: 'warning',
        toastMessage: '“Man is not worried by real problems so much as by his imagined anxieties about real problems.” – Epictetus'
    },
    {
        emoji: '😇',
        feeling: 'content',
        color: 'success',
        toastMessage: '“Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not.” – Epictetus'
    }
];


export const messageStrings: string[] = [
    'You are doing great! Keep it up!',
    'Take a break and relax. You deserve it!',
    'You are doing your best. Keep going!',
    'You are amazing!',
    'You are awesome!',
    'You are a star!',
    'You are a rockstar!',
    'You are a superhero!',
    'You are a warrior!',
    'You are a champion!',
];