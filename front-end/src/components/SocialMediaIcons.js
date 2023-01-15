import "./SocialMediaIcons.css"

function SocialMediaIcons() {
    return(
        <div>
        <p class="OrSignApps"> Or Sign Up With </p>
        <p>Test</p>

                <img src="../static/google.png" alt="google" class="signInWith" onclick="hoverGoogle(this);" onmouseout="unhoverGoogle(this);"></img>
                <img src="../static/facebook.png" alt="facebook" class="signInWith" onclick="hoverFacebook(this);" onmouseout="unhoverFacebook(this);"></img>
                <img src="../static/instagram.png" alt="instagram" class="signInWith" onclick="hoverInstagram(this);" onmouseout="unhoverInstagram(this);"></img>
                <img src="../static/twitter.png" alt="twitter" class="signInWith" onclick="hoverTwitter(this);" onmouseout="unhoverTwitter(this);"></img>
        </div>
    )
}

export default SocialMediaIcons