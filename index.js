// const students = [
//     {
//         firstName: 'Henk',
//         lastName: 'Jansen',
//         grades: {
//             java: 8,
//             htmlCss: 4,
//             javascript: 9,
//             react: 7,
//         },
//         unfollowedCourses: ['Springboot', 'Databases'],
//     },
//     {
//         firstName: 'Piet',
//         lastName: 'Pieters',
//         grades: {
//             databases: 6,
//             java: 4,
//             htmlCss: 9,
//             javascript: 8,
//         },
//         unfollowedCourses: ['React', 'Springboot'],
//     },
// ];

// const students = ['Henk Jansen', 'Piet Pieters', 'Marieke Smit'];
//
// students.map(() => {
//     console.log('Student!');
// });

// const students = ['Henk Jansen', 'Piet Pieters', 'Marieke Smit'];
// const prefixedStudents = students.map((student) => {
//     return 'Leerling: ' + student;
// });
//
// console.log(prefixedStudents); // geeft ['Leerling: Henk Jansen', 'Leerling: Piet Pieters', 'Leerling: Marieke Smit']

// const students = [
//     {
//         name: 'Henk Jansen',
//         course: 'FSD Bootcamp',
//     },
//     {
//         name: 'Piet Pieters',
//         course: 'HBO Software development',
//     },
//     {
//         name: 'Marieke Smit',
//         course: 'FSD Bootcamp',
//     },
// ];
//
// const prefixedStudents = students.map((student) => {
//     return 'Leerling: ' + student.name;
// });
//
//  console.log(prefixedStudents); // geeft[ 'Leerling: Henk Jansen', 'Leerling: Piet Pieters', 'Leerling: Marieke Smit']


// const jethro = 'lief';
// const gy = 'dikkert';
// console.log(jethro + gy);

const students = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
        averageGrade: 7,
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
        averageGrade: 6,
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
        averageGrade: 7.5,
    },
];

const bootcampStudents = students.filter((student) => {
    return student.course === 'FSD Bootcamp';
    // je kunt dit ook uitschrijven als:
    // if (student.course === 'FSD Bootcamp') {
    //    return true
    // }
})

console.log(bootcampStudents); // geeft:
// [
//  { name: 'Henk Jansen', course: 'FSD Bootcamp', averageGrade: 7 },
//  { name: 'Marieke Smit', course: 'FSD Bootcamp', averageGrade: 7.5 },
// ]


const specificStudent = students.find((student) => {
    return student.name === 'Marieke Smit';
});

console.log(specificStudent); // geeft:
// {
//   name: 'Marieke Smit',
//   course: 'FSD Bootcamp',
//   averageGrade: 7.5,
// }









