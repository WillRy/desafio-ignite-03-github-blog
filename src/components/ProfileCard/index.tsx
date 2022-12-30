import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import {
    Avatar,
    Card,
    CardContainer,
    ProfileData,
    ProfileDescription,
    ProfileLink,
    ProfileName,
    ProfileTagItem,
    ProfileTags,
} from "./styles";
import { ArrowSquareOut } from "phosphor-react";
import githubIcon from "../../assets/github-icon.svg";
import organizationIcon from "../../assets/organization-icon.svg";
import userIcon from "../../assets/user-icon.svg";

export function ProfileCard() {
    const { profile } = useContext(BlogContext);

    return (
        <Card>
            {profile && (
                <CardContainer>
                    <Avatar>
                        <img src={profile.avatar_url} alt={profile.name} />
                    </Avatar>

                    <ProfileData>
                        <ProfileName>
                            {profile.name}
                            <ProfileLink
                                href={profile.html_url}
                                target="_blank"
                            >
                                Github <ArrowSquareOut size={12} />
                            </ProfileLink>
                        </ProfileName>
                        <ProfileDescription>
                            {
                                "Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass."
                            }
                        </ProfileDescription>
                        <ProfileTags>
                            <ProfileTagItem>
                                <img src={githubIcon} />
                                {profile.login}
                            </ProfileTagItem>
                            {profile.company && (
                                <ProfileTagItem>
                                    <img src={organizationIcon} />
                                    {profile.login}
                                </ProfileTagItem>
                            )}
                            <ProfileTagItem>
                                <img src={userIcon} />
                                {profile.followers} seguidores
                            </ProfileTagItem>
                        </ProfileTags>
                    </ProfileData>
                </CardContainer>
            )}
        </Card>
    );
}
