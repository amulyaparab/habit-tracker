export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/habits") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            habits: [
              {
                id: 1,
                title: "Drink Water",
                description:
                  "Remember to drink enough water throughout the day",
                isCompleted: true,
              },
              {
                id: 2,
                title: "Meditate",
                description:
                  "Practice meditation for relaxation and mindfulness",
                isCompleted: false,
              },
              {
                id: 3,
                title: "Hit the Gym",
                description: "Engage in a workout session at the gym",
                isCompleted: true,
              },
              {
                id: 4,
                title: "Read Books",
                description:
                  "Spend time reading books to gain knowledge and perspective",
                isCompleted: false,
              },
              {
                id: 5,
                title: "Yoga",
                description:
                  "Perform yoga exercises for physical and mental well-being",
                isCompleted: false,
              },
              {
                id: 6,
                title: "Journal",
                description:
                  "Write in a journal to reflect on thoughts and experiences",
                isCompleted: true,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Habits not found.",
        });
      }
    }, 2000);
  });
};
