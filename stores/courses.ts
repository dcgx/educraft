import { defineStore } from 'pinia'

import { getClient } from '../lib/prisma';

export const useCourseStore = defineStore('courses', {
    state: () => ({
        courses: [],
    }),

    actions: {
        async getAllCourses(course: string): Promise<any> {
            const prismaClient = getClient();
            const courses = await prismaClient.course.findMany({
                include: {
                    units: {
                        include: { chapters: true },
                    },
                },
            });
            this.courses = courses;
            return courses;
        }
    },
})