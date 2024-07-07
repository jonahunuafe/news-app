import React from 'react';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';
import CustomSubmitBtn from '@/components/CustomSubmitBtn';
import { getSpecificNews } from '@/lib/data';
import { updateNews } from '@/lib/action';

const EditSpecifiNews = async ({ params }) => {
    const { id } = params;
    const specificNews = await getSpecificNews(id)
  return (
    <section>
        <Navbar />
        <Heading
            title='Did you Make a Typo or Need to Make Adjustment?'
            description='View & Update News Below!'
        />
        <div className='w-[90%] md:w-[70%] m-auto mb-10'>
            <form
                action={updateNews}
                className='bg-gray-100 flex flex-col items-center p-2 rounded mt-10'
            >
                <div className='flex flex-col md:flex-row gap-4 mb-4 w-[100%]'>
                    <div className='w-full px-1'>
                        <input type='text' name='id' hidden defaultValue={specificNews.id} />
                        <label className='text-gray-700'>Headline</label>
                        <Input
                        type='text'
                        placeholder={specificNews.headline}
                        name='headline'
                        />
                    </div>
                    <div className='w-full px-1'>
                        <label className='text-gray-700'>Creator</label>
                        <Input
                        type='text'
                        placeholder={specificNews.creator}
                        name='creator'
                        />
                    </div>
                </div>
                <div className='flex flex-col mb-4 w-[100%] px-2'>
                    <label>Description</label>
                    <textarea 
                        className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus-outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                        placeholder={specificNews.description} 
                        name="description" 
                        rows='5' 
                    />
                </div>
                <div className='flex mb-4 w-[100%]'>
                    <div className='w-full px-1'>
                        <label className='text-gray-700'>Email</label>
                        <Input
                        type='text'
                        placeholder={specificNews.email}
                        name='email'
                        />
                    </div>
                </div>
                <CustomSubmitBtn  className='bg-orange-400 px-3 py-1 rounded' loadingText="Updating News..." text="Update News"/>
            </form>
        </div>
    </section>
  )
}

export default EditSpecifiNews;