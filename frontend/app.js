document.addEventListener('DOMContentLoaded', () => {
  const scoresDiv = document.getElementById('scores');

  const liveScores = [
    { match: 'Man City vs Chelsea', score: '3 - 2', time: 'FT' },
    { match: 'Barcelona vs Real Madrid', score: '1 - 1', time: 'HT' },
    { match: 'Juventus vs Inter Milan', score: '2 - 0', time: 'FT' },
    { match: 'PSG vs Lyon', score: '4 - 1', time: 'FT' }
  ];

  liveScores.forEach(game => {
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `
      <h3>${game.match}</h3>
      <p>Score: <strong>${game.score}</strong></p>
      <p>Status: ${game.time}</p>
    `;
    scoresDiv.appendChild(card);
  });
});
