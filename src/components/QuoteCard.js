import React from 'react'
import { TwitterIcon, TwitterShareButton } from 'react-share'

const QuoteCard = ({quote}) => {
  return (
    <div className="quote sm:w-[350px] w-full min-h-56 shadow rounded border border-blue-100 m-4 p-4">
            <div className="mb-4">
                <p className="text-black text-sm">
                    {quote.content}
                </p>
            </div>

            <div className="w-full flex items-center mb-6 justify-between">
                <div className="flex items-center">
                    <img src={`https://images.quotable.dev/profile/200/${quote.authorSlug}.jpg`} alt={quote.author} className='w-[50px] rounded-full mr-2' />

                    <h3 className="text-xs text-gray-700">{quote.author}</h3>
                </div>
                

                <div className="p-4 flex items-center justify-end">
                <TwitterShareButton
                    title={`"${quote.content}" - ${quote.author}`}
                    url={"https://twitter.com"}
                    via={"Arshadayvid"}
                    hashtags={["30DaysOfCode", "javascript"]}
                >
                    <TwitterIcon size={32} round={true} className="opacity-40 cursor-pointer hover:opacity-100" />
                </TwitterShareButton>

            </div>
            </div>

    </div>
  )
}

export default QuoteCard