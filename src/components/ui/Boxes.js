import React, { useEffect, useState } from 'react';
import { getCelebrities, patchVote } from '../../api/services';
import { getVotePercentages, processVote, findCelebrity, updateCelebrities } from '../../utils';
import Box from './Box';

function Boxes() {
  const [celebrities, setCelebrities] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: celebrities } = await getCelebrities();
        const mappedCelebrities = celebrities.map(celebrity => {
          const { likePercentage, dislikePercentage } = getVotePercentages(celebrity);
          return {
            ...celebrity,
            likePercentage,
            dislikePercentage,
            hasSubmitted: false,
            hasLiked: null,
            hasErrors: false,
          };
        })
        setCelebrities(mappedCelebrities);
      } catch (error) {
        console.error(error);
      };
    };
    setData();
  }, []);

  const handleVote = (id, vote) => {
    const hasLiked = vote === 'up';
    const updates = { hasLiked: hasLiked }
    const { currentCelebrity, currentIndex } = findCelebrity(celebrities, id);
    const updatedCelebrities = updateCelebrities(celebrities, currentCelebrity, currentIndex, updates);
    setCelebrities(updatedCelebrities);
  };

  const handleVoteSubmission = async id => {
    const { currentCelebrity, currentIndex } = findCelebrity(celebrities, id);
    let updatedCelebrities;
    try {
      const vote = processVote(currentCelebrity);
      const { data: patchedCelebrity } = await patchVote(id, vote);
      const { likePercentage, dislikePercentage } = getVotePercentages(patchedCelebrity);
      const updates = { likePercentage, dislikePercentage, hasSubmitted: true };
      updatedCelebrities = updateCelebrities(celebrities, patchedCelebrity, currentIndex, updates);
    } catch (error) {
      console.error(error);
      const updates = { hasSubmitted: true, hasErrors: true };
      updatedCelebrities = updateCelebrities(celebrities, currentCelebrity, currentIndex, updates);
    } finally {
      setCelebrities(updatedCelebrities);
    };
  };

  const handleVoteAgain = id => {
    const { currentCelebrity, currentIndex } = findCelebrity(celebrities, id);
    const updates = { hasSubmitted: false, hasLiked: null, hasErrors: false };
    const updatedCelebrities = updateCelebrities(celebrities, currentCelebrity, currentIndex, updates);
    setCelebrities(updatedCelebrities);
  };

  return celebrities.map(celebrity =>
    <Box
      {...celebrity}
      key={celebrity.id}
      handleVote={handleVote}
      handleVoteSubmission={handleVoteSubmission}
      handleVoteAgain={handleVoteAgain}
    />
  );
};

export default Boxes;