import { Config } from '@/config';
import SwipperStudentsSection from '../Swipper/SwipperStudents/SwipperStudents';

function StudentsSelect() {
    return (
        <section className={`pb-20 md:px-0 pl-3  bg-gray-50 dark:bg-${Config.DarkColorProject}`}>
            <div className=" max-w-350 p-3 mx-auto">
                <div className="flex  md:flex-row flex-col justify-between md:items-end items-start md:gap-0 gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Шогирдони Мо</h2>
                        <div className={`h-1 w-20 bg-${Config.ColorProject} mt-2`}></div>
                    </div>
                    <button className={`${Config.TextColor} font-semibold hover:underline`}>Ҳамаи шогирдонон →</button>
                </div>

                <SwipperStudentsSection />
            </div>
        </section>
    )
}

export default StudentsSelect