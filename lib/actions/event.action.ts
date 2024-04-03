 "use server";
import { CreateEventParams } from "@/types"
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import { json } from "stream/consumers";

export const createEvent= async ({ event, userId, path }: CreateEventParams) => {
        try {
                const organiser=await User.findById(userId);
                if(!organiser){
                    throw new Error("Organiser not found");
                }
                const newEvent=await Event.create({
                    ...event,
                    category:event.categoryId,
                    organiser:userId
                })
                return JSON.parse(JSON.stringify(newEvent));
        } catch (error) {
            handleError(error); 
        }
}