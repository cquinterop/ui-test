// Closing
export const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
export const getClosingTimeMeasure = remainingDays => (remainingDays === 1) ? 'day' : ((remainingDays === 0) ? 'hours' : 'days');

// Box
export const getVotePercentages = source => {
    const totalVotes = source.thumbsUp + source.thumbsDown;
    const likePercentage = Math.round((source.thumbsUp / totalVotes) * 100);
    const dislikePercentage = Math.round((source.thumbsDown / totalVotes) * 100);
    return { likePercentage, dislikePercentage };
};
export const findCelebrity = (celebrities, id) => {
    const currentIndex = celebrities.findIndex(celebrity => celebrity.id === id);
    const currentCelebrity = celebrities[currentIndex];
    return { currentCelebrity, currentIndex };
};
export const updateCelebrities = (celebrities, currentCelebrity, currentIndex, updates) => {
    const newCelebrities = [...celebrities];
    const updatedCelebrity = { ...currentCelebrity, ...updates };
    newCelebrities.splice(currentIndex, 1, updatedCelebrity);
    return newCelebrities;
};
export const processVote = source => source.hasLiked ? { thumbsUp: source.thumbsUp + 1 } : { thumbsDown: source.thumbsDown + 1 };
