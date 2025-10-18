import mongoose from "mongoose";
const DatabaseConnection = async () => {
  try {
    const DbConncetion = await mongoose.connect(
      // console.log("Mongo Ur5i", process.env.Mongo_Uri)
      `${process.env.Mongo_Uri}/${process.env.Database_Name}`
    );
    console.log(`Databse connceted suceefully here! at : ${DbConncetion}`);
  } catch (error) {
    console.log(`Conneting Database Found Error:Null:${error}`);
    process.exit(1);
  }
};





export { DatabaseConnection };
