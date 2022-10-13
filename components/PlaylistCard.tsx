import React from 'react';
import { PlaylistCardProps } from '../types/playlist';

export default function PlaylistCard({playlist}: PlaylistCardProps) {
  return (
    <div className="mb-6">
                  <div
                    className="rounded-md px-4 py-4 bg-black-play-06 card"
                    key={playlist.id}
                  >
                    <div className="relative">
                      <a
                        className="duration-200 absolute bottom-0 right-0  h-10 w-10 bg-white rounded-full flex items-center justify-center"
                        target="_blank"
                        href={playlist.fields.link}
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="green"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.25 15.25V6.75H8.75"
                          />
                          <path
                            stroke="green"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17 7L6.75 17.25"
                          />
                        </svg>
                      </a>
                      <img
                        src={playlist.fields.image}
                        className="rounded-lg w-full h-[200px] object-cover mb-4"
                        alt="playlist-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-white text-base">
                        {playlist.fields.name}
                      </h3>
                    </div>
                  </div>
                </div>
  )
}


