// pheonix_d123 - "Is This "Inflation"?" (02/19/20)
// LiquoriceLion - "I will never use PhpStorm"  (02/19/20)
// Artandor - "But i might use webstom because it's life !" (02/19/20)
// TheYagich01 - "Please enter the line of code and the message you want to leave in this app... forever... ie: "POGGERS" Line 77" (02/19/20)
// BackeyM - "dump ur points bois" (02/19/20)
// Kendaryth - "Aaaaaaaaaaaaaaand another one!" (02/19/20)
// vezparsoftware - "PLZ CONTRIBUTE THX ;)" (02/19/20)
// MrDemonWolf - "Make sure you use your Twitch Prime Sub. Don't know what Twitch Prime is? Link your amazon account to your twitch account to get great rewards." (03/09/20)

import React from 'react'
import { SpotifyPlatform } from 'Gruvee/config/socials'
import SocialAuthButton from './SocialAuthButton'
import { InitAuthorizationCodeFlow } from './actions/SpotifyActions'

const SpotifyAuthButton = () => {
    const signInWithSpotifyAction = () => {
        // This will open our browser to navigate to Spotify Sign In flow
        // After the flow takes place from a deep link event
        InitAuthorizationCodeFlow()
    }
    return (
        <SocialAuthButton
            platform={SpotifyPlatform}
            platformSignInAction={signInWithSpotifyAction}
        />
    )
}

export default SpotifyAuthButton
