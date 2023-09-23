import { currentUser } from "@clerk/nextjs";

async function RightSidebar() {

    return (
        <section className='custom-scrollbar rightsidebar'>
            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>
                Suggested Communities
                </h3>
                <div className='mt-7 flex w-[350px] flex-col gap-9'>
                </div>
            </div>

            <div className='flex flex-1 flex-col justify-start'>
                <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
                <div className='mt-7 flex w-[350px] flex-col gap-10'>
                {similarMinds.users.length > 0 ? (
                    <>
                    {similarMinds.users.map((person) => (
                        <UserCard
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        username={person.username}
                        imgUrl={person.image}
                        personType='User'
                        />
                    ))}
                    </>
                ) : (
                    <p className='!text-base-regular text-light-3'>No users yet</p>
                )}
                </div>
            </div>
        </section>
    );
}

export default RightSidebar;