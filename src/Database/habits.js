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
                repeat: "Daily",
                goal: "1 time daily",
                time: "Any time",
                startDate: "Today",
              },
              {
                id: 2,
                title: "Meditate",
                description:
                  "Practice meditation for relaxation and mindfulness",
                isCompleted: false,
                repeat: "Three times a week",
                goal: "2 times daily",
                time: "Morning",
                startDate: "Tomorrow",
              },
              {
                id: 3,
                title: "Hit the Gym",
                description: "Engage in a workout session at the gym",
                isCompleted: true,
                repeat: "Twice a week",
                goal: "3 times daily",
                time: "Evening",
                startDate: "Weekend",
              },
              {
                id: 4,
                title: "Read Books",
                description:
                  "Spend time reading books to gain knowledge and perspective",
                isCompleted: false,
                repeat: "Once a week",
                goal: "As many times as possible",
                time: "Night",
                startDate: "Today",
              },
              {
                id: 5,
                title: "Yoga",
                description:
                  "Perform yoga exercises for physical and mental well-being",
                isCompleted: false,
                repeat: "Three times a week",
                goal: "2 times daily",
                time: "Morning",
                startDate: "Tomorrow",
              },
              {
                id: 6,
                title: "Journal",
                description:
                  "Write in a journal to reflect on thoughts and experiences",
                isCompleted: true,
                repeat: "Daily",
                goal: "1 time daily",
                time: "Any time",
                startDate: "Today",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todos not found.",
        });
      }
    }, 2000);
  });
};
