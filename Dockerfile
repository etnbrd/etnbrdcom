#
# Thanks to @Xe for the Dockerfile template
# https://github.com/Shuo-IRC/Shuo/pull/87/files
#

FROM nfnty/arch-nodejs

RUN useradd --create-home etnbrdcom

# Expose HTTP
EXPOSE 9000

# Drop root.
USER etnbrdcom

# Add application files
ADD . /home/etnbrdcom

# Don't use an entrypoint here. It makes debugging difficult.
CMD cd /home/etnbrdcom; npm start