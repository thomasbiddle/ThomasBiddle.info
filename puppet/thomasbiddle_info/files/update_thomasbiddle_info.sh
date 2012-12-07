SITE_BASE="/srv/www"
SITE_DIRECTORY="ThomasBiddle.info"
GIT_REPO="https://github.com/thomasbiddle/ThomasBiddle.info.git"

if [[ ! -d "${SITE_BASE}/${SITE_DIRECTORY}" ]]
then
	cd ${SITE_BASE} && git clone ${GIT_REPO}
elif [[ ! "$(ls -A ${SITE_BASE}/${SITE_DIRECTORY})" ]]
then
    cd ${SITE_BASE} && git clone ${GIT_REPO}
else
	cd ${SITE_BASE}/${SITE_DIRECTORY} && git pull
fi
