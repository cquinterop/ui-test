export const getVotePercentages = (likesAmount, dislikesAmount) => {
    const totalVotes = likesAmount + dislikesAmount;
    const likePercentage = Math.round((likesAmount / totalVotes) * 100);
    const dislikePercentage = Math.round((dislikesAmount / totalVotes) * 100);
    return { likePercentage, dislikePercentage };
}

export const processVote = (likes, dislikes, condition) => {
    let newLikes = likes;
    let newDislikes = dislikes;
    condition ? newLikes++ : newDislikes++;
    return { newLikes, newDislikes }
}
