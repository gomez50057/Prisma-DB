const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });
        const hobi = await prisma.student.upsert({
            where: { name: "Hobi" },
            update: {},
            create: {
                name: "Hobi",
                lang: "Español",
                missionCommander: "Carlo",
                enrollments: 2
            },
        });
  
        const hobi1 = await prisma.student.upsert({
            where: { name: "Hobi1" },
            update: {},
            create: {
                name: "Hobi1",
                lang: "Español",
                missionCommander: "Fer",
                enrollments: 1,
                hasCertification: true
            },
        });
  
        const hobi2 = await prisma.student.upsert({
            where: { name: "Hobi3" },
            update: {},
            create: {
                name: "Hobi3",
                lang: "German",
                missionCommander: "Carlo",
                enrollments: 4,
                hasCertification: true
            },
        });
  
        const hobi3 = await prisma.student.upsert({
            where: { name: "Hobi3" },
            update: {},
            create: {
                name: "Hobi3",
                lang: "Español",
                missionCommander: "Fer"
            },
        });

        
        const MC = await prisma.missionCommander.upsert({
            where: { name: "MissionCommander1" },
            update: {},
            create: {
                name: "MissionCommander1",
                username: "Carlo",
                mainStack: "Elixir",
                currentEnrollment: true,
                hasAzureCertification: true
            },
        });
  
        const MC1 = await prisma.missionCommander.upsert({
            where: { name: "MissionCommander2" },
            update: {},
            create: {
                name: "MissionCommander2",
                username: "Fer",
                mainStack: "Java",
                currentEnrollment: true,
                hasAzureCertification: true
            },
        });
  
        const MC2 = await prisma.missionCommander.upsert({
            where: { name: "MissionCommander3" },
            update: {},
            create: {
                name: "MissionCommander3",
                username: "Javier",
                mainStack: "Java",
                currentEnrollment: false
            },
        });

        console.log("Create 3 explorers");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

