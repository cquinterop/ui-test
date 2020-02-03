// Closing
export const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
export const getClosingTimeMeasure = remainingDays => (remainingDays === 1) ? 'day' : ((remainingDays === 0) ? 'hours' : 'days');

// Box
export const getVotePercentages = (likesAmount, dislikesAmount) => {
    const totalVotes = likesAmount + dislikesAmount;
    const likePercentage = Math.round((likesAmount / totalVotes) * 100);
    const dislikePercentage = Math.round((dislikesAmount / totalVotes) * 100);
    return { likePercentage, dislikePercentage };
};
export const processVote = (condition, source, addition = null) => condition ? { thumbsUp: source.thumbsUp + addition } : { thumbsDown: source.thumbsDown + addition };
