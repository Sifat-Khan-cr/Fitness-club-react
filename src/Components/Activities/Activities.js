import React from 'react';

const Activities = () => {
    const activities = [
        { id: 2, name: 'Jogging', time: 20, image: 'https://i.cdn.newsbytesapp.com/images/l21020210525153846.jpeg' },
        { id: 3, name: 'Dancing', time: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdKIGgqmN9bhTIKlW4fvNjGjMUB_mktO5cw&usqp=CAU' },
        { id: 1, name: 'Swimming', time: 10, image: 'https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2021/03/kelly-pash-texas--1024x683.jpg' },
        { id: 4, name: 'Bicycle riding', time: 60, image: 'https://img.freepik.com/free-photo/women-bike-riding-by-lake-shore-outdoors-park_210435-1305.jpg' },
        { id: 5, name: 'Running', time: 7, image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/b858f2bd-d574-4147-ad85-4fb7e6c397b6/how-to-find-your-optimal-running-paces.jpg' },
        { id: 6, name: 'Walking', time: 15, image: 'https://static01.nyt.com/images/2018/07/03/well/physed-walk/physed-walk-superJumbo.jpg' },
        { id: 7, name: 'Climbing', time: 45, image: 'https://static01.nyt.com/images/2021/10/27/fashion/00NeverTooLate-Climber1-print/00NeverTooLate-Climber2-mediumSquareAt3X.jpg' },
        { id: 8, name: 'Jym', time: 25, image: 'https://thumbs.dreamstime.com/b/sportsman-doing-exercises-biceps-using-dumbbells-jym-concentrated-young-75145310.jpg' },
        { id: 9, name: 'Fighting', time: 12, image: 'https://media.gettyimages.com/photos/ricky-simon-punches-urijah-faber-in-their-bantamweight-bout-during-picture-id1155507414?s=612x612' },
    ]
    return (
        <div className='bg-red-200 '>
            <h1 className='text-3xl'>Select Today's Activity</h1>

        </div>
    );
};

export default Activities;