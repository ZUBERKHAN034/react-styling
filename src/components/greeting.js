const getGreetWithColor = () => {
  const time = new Date().getHours();
  if (time < 12) {
    return { massage: "Good Morning", color: "red" };
  } else if (time < 18) {
    return { massage: "Good Afternoon", color: "green" };
  } else {
    return { massage: "Good Evening", color: "blue" };
  }
};

export { getGreetWithColor };
